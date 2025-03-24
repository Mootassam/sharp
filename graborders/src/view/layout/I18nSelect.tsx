import React from 'react';
import { getLanguages, getLanguageCode } from '../../i18n';
import actions from 'src/modules/layout/layoutActions';

function I18nSelect() {
  const doChangeLanguage = (language) => {
    actions.doChangeLanguage(language);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {getLanguages().map((language) => (
        <div
          key={language.id}
          onClick={() => doChangeLanguage(language.id)}
          style={{
            cursor: 'pointer',
            padding: '13px 20px',
            borderRadius: '5px',
            backgroundColor: getLanguageCode() === language.id ? '#141414' : '#f0f0f0',
            color: getLanguageCode() === language.id ? '#fff' : '#000',
            transition: 'background 0.3s',
          }}
          className='language__style'
        >
          {language.label}
          <img src={language.flag} alt="" style={{ width: 38 }} />
        </div>
      ))}
    </div>
  );
}

export default I18nSelect;
