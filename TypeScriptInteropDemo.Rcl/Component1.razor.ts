// in order to use the dotnet object, we need to import the DotNet namespace from the @microsoft/dotnet-js-interop package.
// the DotNet object is only known at runtime, so we need interface definitions to work with it.
import {DotNet} from '@microsoft/dotnet-js-interop'

export class Component1 {
    private readonly refObject: DotNet.DotNetObject

    constructor(refObject: DotNet.DotNetObject) {
        this.refObject = refObject
    }

    async showPrompt(value: string) {
        alert("This message has been brought to you by the typescript class: " + value)
        return await this.updateContent()
    }
    
    async updateContent() : Promise<void> {
        return await this.refObject.invokeMethodAsync("UpdateContent", 
            "This message has been brought to you by the typescript class: " + new Date().toLocaleTimeString())
    }
}