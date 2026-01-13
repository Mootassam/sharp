import MongooseRepository from "./mongooseRepository";
import MongooseQueryUtils from "../utils/mongooseQueryUtils";
import AuditLogRepository from "./auditLogRepository";
import Error404 from "../../errors/Error404";
import { IRepositoryOptions } from "./IRepositoryOptions";
import FileRepository from "./fileRepository";
import Product from "../models/product";
import UserRepository from "./userRepository";
import RecordRepository from "./recordRepository";
import axios from "axios";

class ProductRepository {

  private static baseConfig = {
    "cookie": "kka_sessionid=e640b3c97cfe71f93dfe325044927bea; GCLB=CL_Q9_XIzqSklwEQAw; CSRF-TOKEN=CfDJ8MObNv7beYBJjzZT7SO0JVIRbZty0srmgokvvUh9yNhAZQvqJXT3oVC_Z0ZiDfwGXiIPTLjzt_CYWzWibQGquTGv72MYURcsQFfgKwLlgg; _ga=GA1.1.177993782.1768309588; searchToken=fa4a54d8-e7d0-4c02-9b9c-a38ffe3f3eb8; XSRF-TOKEN=CfDJ8MObNv7beYBJjzZT7SO0JVJ8144eo8ZAArhypQutrP4amEb5NEFjhsKLY8me-SJP-ihMhdQ1mD6_dBuHHHpHVHhlThZ-3h4tM0y4D31E97Gj2g; CLIENT-TOKEN=eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJpc3MiOiJrYWdnbGUiLCJhdWQiOiJjbGllbnQiLCJzdWIiOiIiLCJuYnQiOiIyMDI2LTAxLTEzVDIyOjM2OjU0LjY3ODg1NzdaIiwiaWF0IjoiMjAyNi0wMS0xM1QyMjozNjo1NC42Nzg4NTc3WiIsImp0aSI6ImE0Njc1YzhlLWE5YjMtNDYwNi04OTVlLTIxZmQ0MDRiZWE5OCIsImV4cCI6IjIwMjYtMDItMTNUMjI6MzY6NTQuNjc4ODU3N1oiLCJhbm9uIjp0cnVlLCJmZmgiOiI5M2IzZDYwZTFkMzM3NzgwNDUwZWFhZGZjY2JkYTRmMjVhOTc2ZjhlOGZkYjQzYzY5N2Q3NGEyOGFmYmQ2NzJmIiwicGlkIjoia2FnZ2xlLTE2MTYwNyIsInN2YyI6IndlYi1mZSIsInNkYWsiOiJBSXphU3lBNGVOcVVkUlJza0pzQ1pXVnotcUw2NTVYYTVKRU1yZUUiLCJibGQiOiI2YTU1NTMyMGI3MmE1MmJjMGJkN2JjYjM0NjE5NzdiZTg0ZTA4NjkzIn0.; _ga_T7QHS60L4Q=GS2.1.s1768343816$o3$g1$t1768343819$j57$l0$h0; build-hash=6a555320b72a52bc0bd7bcb3461977be84e08693",
    "origin": "https://www.kaggle.com",
    "referer": "https://www.kaggle.com/datasets/disham993/9000-movies-dataset",
    "x-kaggle-build-version": "6a555320b72a52bc0bd7bcb3461977be84e08693",
    "Content-Type": "application/json",
    "x-xsrf-token": "CfDJ8MObNv7beYBJjzZT7SO0JVJ8144eo8ZAArhypQutrP4amEb5NEFjhsKLY8me-SJP-ihMhdQ1mD6_dBuHHHpHVHhlThZ-3h4tM0y4D31E97Gj2g"
  };


  static async create(data, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(options);

    const currentUser = MongooseRepository.getCurrentUser(options);

    const [record] = await Product(options.database).create(
      [
        {
          ...data,
          tenant: currentTenant.id,
          createdBy: currentUser.id,
          updatedBy: currentUser.id,
        },
      ],
      options
    );

    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record.id,
      data,
      options
    );

    return this.findById(record.id, options);
  }


  private static async fetchKaggleData(dataConfig: any, value: any, titleIndex: number, imageIndex: number) {
    const url = "https://www.kaggle.com/api/i/datasets.DatasetService/GetDataViewExternal";

    try {
      const response = await axios.post(url, dataConfig, { headers: this.baseConfig });
      const payload = response?.data?.dataView?.dataTable?.rows;

      if (!payload || !Array.isArray(payload)) {
        console.log('No data found in response');
        return [];
      }

      const values = payload.map((item) => {
        return {
          title: item.text[titleIndex] || 'No Title',
          image: item.text[imageIndex] || 'No Image',
          commission: value.comisionrate,
          vip: value.vipId,
          amount: this.generateRandomPrice(value.min, value.max)
        };
      });

      return values;
    } catch (error) {
      console.error('Error fetching data from Kaggle:', error);
      throw error;
    }
  }


  private static generateRandomPrice(minStr: string, maxStr: string): string {
    const min = parseFloat(minStr);
    const max = parseFloat(maxStr);

    if (isNaN(min) || isNaN(max)) {
      return '0.00';
    }

    const randomPrice = (Math.random() * (max - min) + min).toFixed(2);
    return randomPrice;
  }

    static async Vip1(value: any) {
    const data = {
      verificationInfo: {
        datasetId: 1986577,
        databundleVersionId: 3335159
      },
      firestorePath: "Gap0YmT29w4UG00W0VXE/versions/J2SkH4KJ9U1IYvjS6kMc/files/mymoviedb.csv",
      tableQuery: {
        skip: 0,
        take: 1000,
        filter: { constantFilter: { value: true } },
        selectedColumns: [],
        sorts: []
      }
    };

    return await ProductRepository.fetchKaggleData(data, value, 1, 8);
  }



   // VIP 2 - Home and Kitchen
  static async Vip2(value: any) {
    const data = {
      verificationInfo: {
        datasetId: 3020336,
        databundleVersionId: 5312147
      },
      firestorePath: "xPzcStLbnsPzJKeYPOag/versions/DCzIM1E87eQwV2sueUk6/files/All Home and Kitchen.csv",
      tableQuery: {
        skip: 0,
        take: 1000,
        filter: { constantFilter: { value: true } },
        selectedColumns: [],
        sorts: []
      }
    };
    return await ProductRepository.fetchKaggleData(data, value, 0, 3);


  }

  // VIP 3 - Car Parts
  static async Vip3(value: any) {
    const data = {
      verificationInfo: {
        datasetId: 3020336,
        databundleVersionId: 5312147
      },
      firestorePath: "xPzcStLbnsPzJKeYPOag/versions/DCzIM1E87eQwV2sueUk6/files/Car Parts.csv",
      tableQuery: {
        skip: 0,
        take: 1000,
        filter: { constantFilter: { value: true } },
        selectedColumns: [],
        sorts: []
      }
    };

    return await ProductRepository.fetchKaggleData(data, value, 0, 3);

  }

  // VIP 4 - Air Conditioners
  static async Vip4(value: any) {
    const data = {
      verificationInfo: {
        datasetId: 3020336,
        databundleVersionId: 5312147
      },
      firestorePath: "xPzcStLbnsPzJKeYPOag/versions/DCzIM1E87eQwV2sueUk6/files/Air Conditioners.csv",
      tableQuery: {
        skip: 0,
        take: 1000,
        filter: { constantFilter: { value: true } },
        selectedColumns: [],
        sorts: []
      }
    };

        return await ProductRepository.fetchKaggleData(data, value, 0, 3);

  }

  // VIP 5 - Grocery and Gourmet Foods
  static async Vip5(value: any) {
    const data = {
      verificationInfo: {
        datasetId: 3020336,
        databundleVersionId: 5312147
      },
      firestorePath: "xPzcStLbnsPzJKeYPOag/versions/DCzIM1E87eQwV2sueUk6/files/All Grocery and Gourmet Foods.csv",
      tableQuery: {
        skip: 0,
        take: 1000,
        filter: { constantFilter: { value: true } },
        selectedColumns: [],
        sorts: []
      }
    };

    return await ProductRepository.fetchKaggleData(data, value, 0, 3);

  }




  static async update(id, data, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(options);

    let record = await MongooseRepository.wrapWithSessionIfExists(
      Product(options.database).findById(id),
      options
    );

    if (!record || String(record.tenant) !== String(currentTenant.id)) {
      throw new Error404();
    }

    await Product(options.database).updateOne(
      { _id: id },
      {
        ...data,
        updatedBy: MongooseRepository.getCurrentUser(options).id,
      },
      options
    );

    await this._createAuditLog(AuditLogRepository.UPDATE, id, data, options);

    record = await this.findById(id, options);

    return record;
  }

  static async destroy(id, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(options);

    let record = await MongooseRepository.wrapWithSessionIfExists(
      Product(options.database).findById(id),
      options
    );

    if (!record || String(record.tenant) !== String(currentTenant.id)) {
      throw new Error404();
    }

    await Product(options.database).deleteOne({ _id: id }, options);

    await this._createAuditLog(AuditLogRepository.DELETE, id, record, options);
  }

  static async count(filter, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(options);

    return MongooseRepository.wrapWithSessionIfExists(
      Product(options.database).countDocuments({
        ...filter,
        tenant: currentTenant.id,
      }),
      options
    );
  }

  static async findById(id, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(options);

    let record = await MongooseRepository.wrapWithSessionIfExists(
      Product(options.database).findById(id).populate("vip"),
      options
    );

    if (!record || String(record.tenant) !== String(currentTenant.id)) {
      throw new Error404();
    }

    return this._fillFileDownloadUrls(record);
  }

  static async findAndCountAll(
    { filter, limit = 0, offset = 0, orderBy = "" },
    options: IRepositoryOptions
  ) {
    const currentTenant = MongooseRepository.getCurrentTenant(options);

    let criteriaAnd: any = [];

    criteriaAnd.push({
      tenant: currentTenant.id,
    });

    if (filter) {
      if (filter.id) {
        criteriaAnd.push({
          ["_id"]: MongooseQueryUtils.uuid(filter.id),
        });
      }

      if (filter.title) {
        criteriaAnd.push({
          title: {
            $regex: MongooseQueryUtils.escapeRegExp(filter.title),
            $options: "i",
          },
        });
      }

      if (filter.amount) {
        criteriaAnd.push({
          amount: {
            $regex: MongooseQueryUtils.escapeRegExp(filter.amount),
            $options: "i",
          },
        });
      }
      if (filter.vip) {
        criteriaAnd.push({
          vip: filter.vip,
        });
      }
    }

    const sort = MongooseQueryUtils.sort(orderBy || "createdAt_DESC");

    const skip = Number(offset || 0) || undefined;
    const limitEscaped = Number(limit || 0) || undefined;
    const criteria = criteriaAnd.length ? { $and: criteriaAnd } : null;

    let rows = await Product(options.database)
      .find(criteria)
      .skip(skip)
      .limit(limitEscaped)
      .populate("vip")
      .sort(sort);

    const count = await Product(options.database).countDocuments(criteria);

    rows = await Promise.all(rows.map(this._fillFileDownloadUrls));

    return { rows, count };
  }

  static async findAllAutocomplete(search, limit, options: IRepositoryOptions) {
    const currentTenant = MongooseRepository.getCurrentTenant(options);

    let criteriaAnd: Array<any> = [
      {
        tenant: currentTenant.id,
      },
    ];

    if (search) {
      criteriaAnd.push({
        $or: [
          {
            _id: MongooseQueryUtils.uuid(search),
          },
          {
            titre: {
              $regex: MongooseQueryUtils.escapeRegExp(search),
              $options: "i",
            },
          },
        ],
      });
    }

    const sort = MongooseQueryUtils.sort("titre_ASC");
    const limitEscaped = Number(limit || 0) || undefined;

    const criteria = { $and: criteriaAnd };

    const records = await Product(options.database)
      .find(criteria)
      .limit(limitEscaped)
      .sort(sort);

    return records.map((record) => ({
      id: record.id,
      label: record.title,
    }));
  }

  static async _createAuditLog(action, id, data, options: IRepositoryOptions) {
    await AuditLogRepository.log(
      {
        entityName: Product(options.database).modelName,
        entityId: id,
        action,
        values: data,
      },
      options
    );
  }

  static async _fillFileDownloadUrls(record) {
    if (!record) {
      return null;
    }

    const output = record.toObject ? record.toObject() : record;
    output.photo = await FileRepository.fillDownloadUrl(output.photo);

    return output;
  }
  static async grapOrders(options: IRepositoryOptions) {


    const currentUser = MongooseRepository.getCurrentUser(options);
    const currentVip = MongooseRepository.getCurrentUser(options).vip.id;
    const Orderdone = (await RecordRepository.CountOrder(options)).record;
    // const Orderdone = (await RecordRepository.CountOrder(options)).record;

    const mergeDataPosition = currentUser.itemNumber;
    if (currentUser && currentUser.product && currentUser.product.id && currentUser.tasksDone === mergeDataPosition) {
      let prodcut = currentUser.product;
      prodcut.photo = await FileRepository.fillDownloadUrl(prodcut?.photo);
      return prodcut;
    } else {
      let record = await Product(options.database)
        .find({ vip: currentVip, combo: false })
        .populate("vip");
      const random = Math.floor(Math.random() * record.length);
      record = await Promise.all(record.map(this._fillFileDownloadUrls));
      return record[random];
    }
  }
}

export default ProductRepository;
