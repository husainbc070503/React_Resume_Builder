export const ResumeReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE": {
      const { type, name, value } = action.payload;
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [type]: {
            ...state.formValues[type],
            [name]: value,
          },
        },
      };
    }

    case "SET_PROFILE_PIC": {
      const { type, pic } = action.payload;
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [type]: {
            ...state.formValues[type],
            profile: pic,
          },
        },
      };
    }

    case "ADD_EXPERIENCE":
      return {
        ...state,
        formValues: {
          ...state.formValues,
          workexperience: [
            ...state.formValues.workexperience,
            { ...action.payload, id: Math.floor(Math.random() * 1000) },
          ],
        },
      };

    case "ADD_PROJECT":
      return {
        ...state,
        formValues: {
          ...state.formValues,
          projects: [
            ...state.formValues.projects,
            { ...action.payload, id: Math.floor(Math.random() * 1000) },
          ],
        },
      };

    case "ADD_SKILL":
      return {
        ...state,
        formValues: {
          ...state.formValues,
          skills: [
            ...state.formValues.skills,
            { skill: action.payload, id: Math.floor(Math.random() * 1000) },
          ],
        },
      };

    case "ADD_CERTIFICATE":
      return {
        ...state,
        formValues: {
          ...state.formValues,
          certificates: [
            ...state.formValues.certificates,
            { ...action.payload, id: Math.floor(Math.random() * 1000) },
          ],
        },
      };

    case "DELETE_EXPERIENCE":
      return {
        ...state,
        formValues: {
          ...state.formValues,
          workexperience: state.formValues.workexperience.filter(
            (work) => work.id !== action.payload
          ),
        },
      };

    case "DELETE_SKILL":
      return {
        ...state,
        formValues: {
          ...state.formValues,
          skills: state.formValues.skills.filter(
            (skill) => skill.id !== action.payload
          ),
        },
      };

    case "DELETE_PROJECT":
      return {
        ...state,
        formValues: {
          ...state.formValues,
          projects: state.formValues.projects.filter(
            (pro) => pro.id !== action.payload
          ),
        },
      };

    case "DELETE_CERTIFICATE":
      return {
        ...state,
        formValues: {
          ...state.formValues,
          certificates: state.formValues.certificates.filter(
            (cer) => cer.id !== action.payload
          ),
        },
      };

    case "CLEAR_ALL":
      return {
        ...state,
        formValues: {
          // personal details
          personal: {
            firstname: "",
            lastname: "",
            summary: "",
            email: "",
            phone: "",
            address: "",
            profile: "",
            linkedin: "",
            github: "",
            portfolio: "",
            qualities: "",
          },
          // education details
          education: {
            clgname: "",
            clglocation: "",
            clgqualification: "",
            clgstart: "",
            clgend: "",
            schoolname: "",
            schoollocation: "",
            schoolqualification: "",
            schoolstart: "",
            schoolend: "",
          },
          // work experience
          workexperience: [],
          // skills
          skills: [],
          // projects
          projects: [],
          // certificates
          certificates: [],
        },
      };

    default:
      return state;
  }
};
