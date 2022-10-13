export const submitPersonalForm = (personalInfo) => ({
  type: 'SUBMIT_PERSONAL_FORM',
  payload: personalInfo,
});

export const submitProfessionalForm = (professionalInfo) => ({
  type: 'SUBMIT_PROFESSIONAL_FORM',
  payload: professionalInfo,
});
