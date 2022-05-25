# VirtualForm
A method to send formula data with the browser via js.

## Usage
- example: 1
```javascript
const vForm = new VirtualForm()
vForm.append("method", "deleteDomain")
vForm.append("id", id)
vForm.send()
```

- example: 2
```javascript
const formData = new VirtualFormData()
formData.append("method", "someMethod")
formData.append("id", "someID")

const vForm = new VirtualForm("#", "post", formData)
vForm.send()
```
