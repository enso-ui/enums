import Enum from './Enum';

const translate = key => key;

const initEnums = (enums, i18n = translate) => {
    const obj = {};

    Object.keys(enums)
        .forEach(enumName => (obj[enumName] = new Enum(enums[enumName], i18n)));

    return obj;
};

export default initEnums;
