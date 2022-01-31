export const printObjetc = (argument: any) => {
    console.log(argument);
}

export function genericFunction<T>(argument: T) {
    return argument;
}

export const genericFunctionArrow = <T>(argument: T) => {
    return argument;
}

export const genericFunctionArroww = <T>(argument: T) => argument;