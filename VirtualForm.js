/**
 * @author OvODev info@ovo-dev.com
 */

/**
 * A custom method to send form data to a target url in the same window, like a normal formula
 * 
 * @class VirtualForm
 */
class VirtualForm {
    /**
     * Method of the Request
     * @type {string | null}
     */
    method = null

    /**
     * Target URL for the request
     * @type {string | null}
     */
    action = null

    /**
     * Custom FormData object
     * @type {VirtualFormData | null}
     */
    formData = null

    /**
     * Initialize VirtualForm and set Parameters
     *
     * @param action {string} path to the target url (default = #)
     * @param method {string} method of the request (default = post)
     * @param formData {VirtualFormData} if form data is Available
     *
     * @returns {void}
     */
    constructor(action = "#", method = "post", formData = new VirtualFormData()){
        this.action = action
        this.method = method
        this.formData = formData
    }

    /**
     * Adds a key and value to the VirtualFormData
     *
     * @param key {string} key name of the entry
     * @param value {string | int} value of the key
     *
     * @returns {void}
     */
    append(key, value){
        this.formData.append(key, value)
    }

    /**
     * Creates the VirtualForm and send it to the target url
     *
     * @returns {void}
     */
    send(){
        const vForm = document.createElement('form')
        vForm.method = this.method
        vForm.action = this.action
        document.body.appendChild(vForm)

        let data = this.formData.values
        for(let key in data){
            console.log(key)
            let keyItem = document.createElement("input")
            let val = data[key]

            keyItem.name = key;
            keyItem.value = val;
            keyItem.type = 'hidden';

            vForm.appendChild(keyItem);
        }

        vForm.submit()
    }

}

/**
 * A class for handling custom formData
 *
 * @class VirtualFormData
 */
class VirtualFormData {
    /**
     * Storage for the keys and values as JSON
     * @type {{}}
     */
    values = {}

    /**
     *  Adds a key and a value to the formData object
     *
     * @param key {string} key name of the entry
     * @param data {string | int} value of the key
     *
     * @returns {void}
     */
    append(key, data){
        this.values[key] = data
    }
}
