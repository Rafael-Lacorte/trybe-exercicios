const INITIAL_STATE = {
  personal: {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    uf: '',
  },
  professional: {
    curriculum: '',
    job: '',
    description: '',
  },
};

function Update(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SUBMIT_PERSONAL_FORM':
    return {
      ...state,
      personal: { ...action.payload },
    };
  case 'SUBMIT_PROFESSIONAL_FORM':
    return {
      ...state,
      professional: { ...action.payload },
    };
  default:
    return state;
  }
}

export default Update;
