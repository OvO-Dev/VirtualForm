/**
 * A class for sending data
 */
class VirtualForm2 {
    /**
     * Engine of the class and contains the request results
     * @type {XMLHttpRequest}
     */
    #xhr = new XMLHttpRequest()

    /**
     * Request payload as FormData Object
     * @type {FormData}
     */
    #formData = new FormData()

    /**
     * Location / Url of the reqest
     * @type {string}
     */
    #location = ""

    /**
     * Method of the request
     * @type {string}
     */
    #method = ""

    /**
     * Function wich gets triggered on success of the request and can set by the "setFunction" method
     */
    #onSuccess = () => {}
    #onError = () => {
        console.log("Failed request!")
    }

    /**
     * Initiates the class and set default parameters
     * @param location
     * @param method
     */
    constructor(location = window.location.href, method = "POST") {
        this.#location = location
        this.#method = method

        this.#xhr.open(this.#method, this.#location);
    }

    /**
     * Sets the function wich is triggered on success
     * @param cb
     */
    setFunction(cb){
        this.#onSuccess = () => {
            cb(this.#xhr.status, this.#xhr.responseText)
        };

        this.#xhr.addEventListener("load", this.#onSuccess)
        this.#xhr.addEventListener("error", this.#onError)
    }

    /**
     * Adds value and a key to the payload
     * @param key
     * @param value
     */
    #append(key, value){
        this.#formData.append(key, value)
    }

    /**
     * Send the data to the requested URL
     * @param data
     * @returns {boolean}
     */
    send(data = {}){
        if(typeof this.#onSuccess != "function"){
            console.log("No success function set!")
            return false
        }

        Object.keys(data).forEach(item => {
            this.#append(item, data[item])
        })

        this.#xhr.send(this.#formData)
    }
}
