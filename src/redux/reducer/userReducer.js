const initialstate = {
  name: '',
  age: 0,
  adress: '',
  phone: '',
  nik: '',
};

export default function (state = initialstate, actions) {
  switch (actions.type) {
    case 'NAMAUSER':
      return {
        ...state,
        name: actions.payload,
      };
    case 'AGE':
      return {
        ...state,
        age: actions.payload,
      };
    case 'PROFILE':
      return {
        ...state,
        school: 'SMA N1',
        ...actions.payload,
      };

    default:
      return state;
  }
}
