import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import FileUploader from 'src/modules/shared/fileUpload/fileUploader';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from '../../../i18n';
import ImagesUploaderWrapper from 'src/view/shared/styles/ImagesUploaderWrapper';
import ImageModal from 'src/view/shared/modals/ImageModal';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import service from "src/modules/auth/authService";
import Message from 'src/shared/message';


function ImagesUploader(props) {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<any>(null);
  const input = useRef<any>();

  const value = () => {
    const { value } = props;

    if (!value) {
      return [];
    }

    return Array.isArray(value) ? value : [value];
  };

  const fileList = () => {
    return value().map((item) => ({
      uid: item.id || undefined,
      name: item.name,
      status: 'done',
      url: item.downloadUrl,
    }));
  };

  const handleRemove = (id) => {
    props.onChange(
      value().filter((item) => item.id !== id),
    );
  };

  const handleChange = async (event) => {
    try {
      const files = event.target.files;

      if (!files || !files.length) {
        return;
      }

      let file = files[0];

      FileUploader.validate(file, {
        storage: props.storage,
        image: true,
      });

      setLoading(true);

      file = await FileUploader.upload(file, {
        storage: props.storage,
        image: true,
      });

      const data = {avatars: file}

      input.current.value = '';
      await service.updateProfile(data);
      Message.success(i18n("auth.profile.success"));


      setLoading(false);
      props.onChange([...value(), file]);
    } catch (error) {
      input.current.value = '';
      console.error(error);
      setLoading(false);
      Errors.showMessage(error);
    }
  };

  const doPreviewImage = (image) => {
    setImage({
      src: image.downloadUrl,
      alt: image.name,
    });
  };

  const doCloseImageModal = () => {
    setImage(null);
  };

  const { max, readonly } = props;

  const uploadButton = (
    <label
      className="btn btn-outline-secondary px-4 mb-2"
      style={{ cursor: 'pointer' }}
    >
      <ButtonIcon
        loading={loading}
        iconClass="fas fa-plus"
      />
                  <div className="header__image"></div>

      <input
        style={{ display: 'none' }}
        disabled={loading || readonly}
        accept="image/*"
        type="file"
        onChange={handleChange}
        ref={input}
      />
    </label>
  );

  return (
    <ImagesUploaderWrapper>
      {readonly || (max && fileList().length >= max)
        ? null
        : uploadButton}

      {value() && value().length ? (
        <div className="d-flex flex-row flex-wrap">
          {value().map((item) => {
            return (
              <div
                className="mr-2 mb-2 img-card"
                style={{ height: '100px' }}
                key={item.id}
              >
                <img
                  alt={item.name}
                  src={item.downloadUrl}
                  className="header__profile__image"
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                  }}
                />

                <div className="img-buttons rounded-bottom ">
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => doPreviewImage(item)}
                  >
                    <i className="fas fa-search"></i>
                  </button>
                  {!readonly && (
                    <button
                      type="button"
                      className="btn btn-link ml-2"
                      onClick={() => handleRemove(item.id)}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : null}

      {image && (
        <ImageModal
          src={image.src}
          alt={image.alt}
          onClose={() => doCloseImageModal()}
        />
      )}
    </ImagesUploaderWrapper>
  );
}

ImagesUploader.propTypes = {
  readonly: PropTypes.bool,
  max: PropTypes.number,
  storage: PropTypes.object,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default ImagesUploader;
