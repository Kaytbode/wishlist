const validateInput = (obj: {id: any, name: string, description: string}) => {
    const regex = /[^A-Za-z0-9 ]/;
    const { name, description } = obj;

    return (!(regex.test(name)) && !(regex.test(description)));
}

export default validateInput;
