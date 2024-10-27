
export function Logger(target: any, propertyKey: string, descriptor?: PropertyDescriptor): PropertyDescriptor| void| any{

    const originalMethodOrProperty = descriptor?.value;

    //overriding the value;
    if(originalMethodOrProperty && typeof originalMethodOrProperty == "function"){
        descriptor.value = function (...args: any[]) {
            // console.log("%c--------------------------------", 'background: #000; color: #ff7300')
            // console.log(`Calling ${propertyKey} with arguments:`, args);
            const result = originalMethodOrProperty.apply(this, args);
            console.log("Class:", target.constructor.name, ", method:", propertyKey,", args:", args,", result:", result);
            // console.log("%c--------------------------------", 'background: #000; color: #ff7300')

            return result;
        };
        return descriptor;
    } else {
        let currentValue: any = target[propertyKey];
        console.log(`%c --- value of ${propertyKey}: ${currentValue}`,
            'background: #000; color: #ffde00');
            
            // Get the original descriptor if it exists
            const originalDescriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
            console.log(target[propertyKey], target, descriptor, originalDescriptor);
    
        // Create a new descriptor with a getter that logs the value
        Object.defineProperty(target, propertyKey, {
            get() {
                const value = originalDescriptor && originalDescriptor.get ? originalDescriptor.get.call(this) : this[propertyKey];
                console.log(` GETTING Value of '${propertyKey}':`, value);
                console.log(`%c --- 1 value of ${propertyKey}: ${currentValue}`,
                    'background: #000; color: #ffde00');
                console.log(target[propertyKey], target, originalDescriptor);
                return "NEW VALUE";
            },
            set(newValue) {
                // if (descriptor && descriptor.set) {
                //     descriptor.set.call(this, newValue);
                // } else {
                //     this[propertyKey] = newValue;
                // }
                console.log(`%c --- SETTING value of ${propertyKey}: ${currentValue}`,
                    'background: #000; color: #ffde00');
                console.log(target[propertyKey], target, originalDescriptor);
            }
        });
    
    }


}