export class LocationDTO {
  ParentCode: any;
  ProvinceCode: any;
  DistrictCode: any;
  WardCode: any;
  StatusName: string;
  ListChild: LocationDTO[] | null;
  Code: number;
  ParentID: number | null;
  LocationID: string;
  LocationName: string;
  Brieft: any;
  Address: any;
  Province: any;
  District: any;
  Ward: any;
  Remark: any;
  StatusID: number;
}

export const ListLocationTree = {
  StatusCode: 0,
  ErrorString: null,
  ObjectReturn: [
    {
      ParentCode: null,
      ProvinceCode: null,
      DistrictCode: null,
      WardCode: null,
      StatusName: 'Duyệt áp dụng',
      ListChild: [
        {
          ParentCode: null,
          ProvinceCode: null,
          DistrictCode: null,
          WardCode: null,
          StatusName: 'Duyệt áp dụng',
          ListChild: [
            {
              ParentCode: null,
              ProvinceCode: null,
              DistrictCode: null,
              WardCode: null,
              StatusName: 'Duyệt áp dụng',
              ListChild: null,
              Code: 3,
              ParentID: 2,
              LocationID: 'DP42',
              LocationName: 'Kho 42',
              Brieft: null,
              Address: null,
              Province: null,
              District: null,
              Ward: null,
              Remark: null,
              StatusID: 2,
            },
          ],
          Code: 2,
          ParentID: 1,
          LocationID: 'LO42',
          LocationName: 'Văn phòng 42',
          Brieft: null,
          Address: null,
          Province: null,
          District: null,
          Ward: null,
          Remark: null,
          StatusID: 2,
        },
      ],
      Code: 1,
      ParentID: null,
      LocationID: 'HW40',
      LocationName: 'Văn phòng 40',
      Brieft: null,
      Address: null,
      Province: null,
      District: null,
      Ward: null,
      Remark: null,
      StatusID: 2,
    },
    {
      ParentCode: null,
      ProvinceCode: null,
      DistrictCode: null,
      WardCode: null,
      StatusName: 'Duyệt áp dụng',
      ListChild: null,
      Code: 4,
      ParentID: null,
      LocationID: 'OW40',
      LocationName: 'Kho Online',
      Brieft: null,
      Address: null,
      Province: null,
      District: null,
      Ward: null,
      Remark: null,
      StatusID: 2,
    },
    {
      ParentCode: null,
      ProvinceCode: null,
      DistrictCode: null,
      WardCode: null,
      StatusName: 'Duyệt áp dụng',
      ListChild: null,
      Code: 5,
      ParentID: null,
      LocationID: 'HC01',
      LocationName: 'Hachi Hachi NVT',
      Brieft: null,
      Address: null,
      Province: null,
      District: null,
      Ward: null,
      Remark: null,
      StatusID: 2,
    },
    {
      ParentCode: null,
      ProvinceCode: null,
      DistrictCode: null,
      WardCode: null,
      StatusName: 'Duyệt áp dụng',
      ListChild: null,
      Code: 6,
      ParentID: null,
      LocationID: 'HC02',
      LocationName: 'Hachi Hachi PMH',
      Brieft: null,
      Address: null,
      Province: null,
      District: null,
      Ward: null,
      Remark: null,
      StatusID: 2,
    },
    {
      ParentCode: null,
      ProvinceCode: null,
      DistrictCode: null,
      WardCode: null,
      StatusName: 'Duyệt áp dụng',
      ListChild: null,
      Code: 7,
      ParentID: null,
      LocationID: 'HC03',
      LocationName: 'Hachi Hachi CMT8',
      Brieft: null,
      Address: null,
      Province: null,
      District: null,
      Ward: null,
      Remark: null,
      StatusID: 2,
    },
    {
      ParentCode: null,
      ProvinceCode: null,
      DistrictCode: null,
      WardCode: null,
      StatusName: 'Duyệt áp dụng',
      ListChild: null,
      Code: 8,
      ParentID: null,
      LocationID: 'HC04',
      LocationName: 'Hachi Hachi PT',
      Brieft: null,
      Address: null,
      Province: null,
      District: null,
      Ward: null,
      Remark: null,
      StatusID: 2,
    },
    {
      ParentCode: null,
      ProvinceCode: null,
      DistrictCode: null,
      WardCode: null,
      StatusName: 'Duyệt áp dụng',
      ListChild: null,
      Code: 9,
      ParentID: null,
      LocationID: 'HC05',
      LocationName: 'Hachi Hachi QT',
      Brieft: null,
      Address: null,
      Province: null,
      District: null,
      Ward: null,
      Remark: null,
      StatusID: 2,
    },
    {
      ParentCode: null,
      ProvinceCode: null,
      DistrictCode: null,
      WardCode: null,
      StatusName: 'Duyệt áp dụng',
      ListChild: null,
      Code: 10,
      ParentID: null,
      LocationID: 'HC06',
      LocationName: 'Hachi Hachi DXH',
      Brieft: null,
      Address: null,
      Province: null,
      District: null,
      Ward: null,
      Remark: null,
      StatusID: 2,
    },
  ],
};
