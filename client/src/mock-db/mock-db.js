// these are representations of the object data recieved from a back-end database
// they are named according to their query functionality.

const getAllOpenSkids = [
  {
    id: 1,
    name: '16 bx',
    supplier: 'Gulf Fresh',
    country_of_origin: 'MEX',
    some_number: 1595,
    rank_lot_number: 121,
    arrival_date: '2020-11-11',
    rank_qc_report: 1145,
    complete: false,
    boxes: [
      {
        id: 1,
        box_number: 1,
        user_id: 'John Smith',
        invoice_date: null,
        species: 'Black Grouper',
        size: '10-20',
        weight: 120,
        customer: 'Cod & Capers',
        price: 625,
        ship_date: '2020-11-12',
        carrier: 'Dukes',
        case: '3A',
        lot: '121'
      },
      {
        id: 2,
        box_number: 2,
        user_id: 'John Smith',
        invoice_date: null,
        species: 'Black Grouper',
        size: '10-20',
        weight: 121,
        customer: 'Cod & Capers',
        price: 625,
        ship_date: '2020-11-12',
        carrier: 'Dukes',
        case: '3A',
        lot: '121'
      },
      {
        id: 3,
        box_number: 3,
        user_id: 'Carlos Furtado',
        invoice_date: null,
        species: 'Black Grouper',
        size: '10-20',
        weight: 132,
        customer: 'KX',
        price: 630,
        ship_date: '2020-11-12',
        carrier: 'Panther',
        case: '3A',
        lot: '121'
      },
      {
        id: 4,
        box_number: 4,
        user_id: 'John Smith',
        invoice_date: null,
        species: 'Black Grouper',
        size: '30-40',
        weight: 124,
        customer: 'Cod & Capers',
        price: 625,
        ship_date: '2020-11-12',
        carrier: 'Dukes',
        case: '3A',
        lot: '121'
      },
      {
        id: 5,
        box_number: 5,
        user_id: 'Carlos furtado',
        invoice_date: null,
        species: 'Black Grouper',
        size: '20-30',
        weight: 123,
        customer: 'KX',
        price: 630,
        ship_date: '2020-11-12',
        carrier: 'Panther',
        case: '3A',
        lot: '121'
      },
      {
        id: 6,
        box_number: 6,
        user_id: 'Carlos Furtados',
        invoice_date: null,
        species: 'Black Grouper',
        size: '20-30',
        weight: 122,
        customer: 'New England Fish',
        price: 630,
        ship_date: '2020-11-12',
        carrier: 'Dukes',
        case: '3B',
        lot: '121'
      },
      {
        id: 7,
        box_number: 7,
        user_id: 'Carlos Furtados',
        invoice_date: null,
        species: 'Red Grouper',
        size: '5-10',
        weight: 110,
        customer: 'New England Fish',
        price: 565,
        ship_date: '2020-11-12',
        carrier: 'Dukes',
        case: '3B',
        lot: '121'
      },
      {
        id: 8,
        box_number: 8,
        user_id: 'Carlos Furtados',
        invoice_date: null,
        species: 'Red Grouper',
        size: '5-10',
        weight: 119,
        customer: 'New England Fish',
        price: 565,
        ship_date: '2020-11-12',
        carrier: 'Dukes',
        case: '3B',
        lot: '121'
      },
      {
        id: 9,
        box_number: 9,
        user_id: 'Carlos furtado',
        invoice_date: null,
        species: 'Red Grouper',
        size: '10-20',
        weight: 117,
        customer: '117',
        price: 595,
        ship_date: '2020-11-12',
        carrier: 'Panther',
        case: '3A',
        lot: '121'
      },
      {
        id: 10,
        box_number: 10,
        user_id: null,
        invoice_date: null,
        species: 'Red Grouper',
        size: '10-20',
        weight: 114,
        customer: null,
        price: null,
        ship_date: null,
        carrier: null,
        case: null,
        lot: null
      },
      {
        id: 11,
        box_number: 11,
        user_id: null,
        invoice_date: null,
        species: 'Red Grouper',
        size: '10-20',
        weight: 117,
        customer: null,
        price: null,
        ship_date: null,
        carrier: null,
        case: null,
        lot: null
      },
      {
        id: 12,
        box_number: 12,
        user_id: 'John Smith',
        invoice_date: null,
        species: 'YT Snapper',
        size: '1-2',
        weight: 55,
        customer: 'Two Bills',
        price: 465,
        ship_date: '2020-11-13',
        carrier: 'Dukes',
        case: '4B',
        lot: '121/122'
      },
      {
        id: 13,
        box_number: 13,
        user_id: 'John Smith',
        invoice_date: null,
        species: 'YT Snapper',
        size: '1-2',
        weight: 55,
        customer: 'Two Bills',
        price: 465,
        ship_date: '2020-11-13',
        carrier: 'Dukes',
        case: '4B',
        lot: '121/122'
      },
      {
        id: 14,
        box_number: 14,
        user_id: null,
        invoice_date: null,
        species: 'YT Snapper',
        size: '1-2',
        weight: 55,
        customer: null,
        price: null,
        ship_date: null,
        carrier: null,
        case: null,
        lot: null
      },
      {
        id: 15,
        box_number: 15,
        user_id: null,
        invoice_date: null,
        species: 'YT Snapper',
        size: '1-2',
        weight: 55,
        customer: null,
        price: null,
        ship_date: null,
        carrier: null,
        case: null,
        lot: null
      },
      {
        id: 16,
        box_number: 16,
        user_id: null,
        invoice_date: null,
        species: 'YT Snapper',
        size: '1-2',
        weight: 55,
        customer: null,
        price: null,
        ship_date: null,
        carrier: null,
        case: null,
        lot: null
      }
    ]
  },
  {
    id: 2,
    name: '5 bx',
    supplier: 'Zaso',
    country_of_origin: 'MEX',
    some_number: 275,
    rank_lot_number: 122,
    arrival_date: '2020-11-12',
    rank_qc_report: 1147,
    complete: false,
    boxes: [
      {
        id: 17,
        box_number: 1,
        user_id: 'John Smith',
        invoice_date: null,
        species: 'YT Snapper',
        size: '2-4',
        weight: 55,
        customer: 'Two Bills',
        price: 485,
        ship_date: '2020-11-13',
        carrier: 'Dukes',
        case: '4B',
        lot: '121/122'
      },
      {
        id: 18,
        box_number: 2,
        user_id: 'John Smith',
        invoice_date: null,
        species: 'YT Snapper',
        size: '2-4',
        weight: 55,
        customer: 'Two Bills',
        price: 485,
        ship_date: '2020-11-13',
        carrier: 'Dukes',
        case: '4B',
        lot: '121/122'
      },
      {
        id: 19,
        box_number: 3,
        user_id: null,
        invoice_date: null,
        species: 'YT Snapper',
        size: '1-2',
        weight: 55,
        customer: null,
        price: null,
        ship_date: null,
        carrier: null,
        case: null,
        lot: null
      },
      {
        id: 20,
        box_number: 4,
        user_id: null,
        invoice_date: null,
        species: 'YT Snapper',
        size: '1-2',
        weight: 55,
        customer: null,
        price: null,
        ship_date: null,
        carrier: null,
        case: null,
        lot: null
      },
      {
        id: 21,
        box_number: 5,
        user_id: null,
        invoice_date: null,
        species: 'YT Snapper',
        size: '1-2',
        weight: 55,
        customer: null,
        price: null,
        ship_date: null,
        carrier: null,
        case: null,
        lot: null
      }
    ]
  },
  {
    id: 3,
    name: '4 bx',
    supplier: 'Lanser',
    country_of_origin: 'TRD',
    some_number: 480,
    rank_lot_number: 123,
    arrival_date: '2020-11-12',
    rank_qc_report: 1147,
    complete: false,
    boxes: [
      {
        id: 22,
        box_number: 1,
        user_id: null,
        invoice_date: null,
        species: 'YE Grouper',
        size: '10-20',
        weight: 120,
        customer: null,
        price: null,
        ship_date: null,
        carrier: null,
        case: null,
        lot: null
      },
      {
        id: 23,
        box_number: 2,
        user_id: 'Tory Mackenzie',
        invoice_date: null,
        species: 'YE Grouper',
        size: '10-20',
        weight: 120,
        customer: 'MAX CAN',
        price: 400,
        ship_date: '2020-11-13',
        carrier: 'MAX',
        case: '2A',
        lot: '123'
      },
      {
        id: 24,
        box_number: 3,
        user_id: 'Tory Mackenzie',
        invoice_date: null,
        species: 'YE Grouper',
        size: '10-20',
        weight: 120,
        customer: 'MAX CAN',
        price: 400,
        ship_date: '2020-11-13',
        carrier: 'MAX',
        case: '2A',
        lot: '123'
      },
      {
        id: 25,
        box_number: 4,
        user_id: null,
        invoice_date: null,
        species: 'YE Grouper',
        size: '10-20',
        weight: 120,
        customer: null,
        price: null,
        ship_date: null,
        carrier: null,
        case: null,
        lot: null
      }
    ]
  }
]



export default getAllOpenSkids