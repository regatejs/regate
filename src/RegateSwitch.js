const RegateSwitch = {}

RegateSwitch.init = function ({
  id,
  name,
  isChecked = false,
  size = RegateSwitch.Size.Medium,
}) {

  if (id === undefined)
    throw new Error('id is required')

  const _input = document.getElementById(id + '__input')

  if (_input === undefined)
    throw new Error('id is invalid')

  _input.name = name

  if (isChecked)
    _input.checked = true
}

RegateSwitch.Size = {
  'Small': 'small',
  'Medium': 'default',
  'Large': 'large',
}

RegateSwitch._markup = `
  <style>
    #{id}__label {
      position: relative;
      margin-bottom: 0;
      vertical-align: top;
      display: inline-block;
    }
    
    #{id}__label::before {
      pointer-events: all;
      border-radius: .5rem;
      transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 28px;
      height: 16px;
      content: "";
      background-color: #fff;
      border: #adb5bd solid 1px;
      box-sizing: border-box;
    }
    
    #{id}__label::after {
      top: 2px;
      left: 2px;
      width: 12px;
      height: 12px;
      background-color: #adb5bd;
      border-radius: .5rem;
      transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out;
      transition: transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      transition: transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out;
      box-sizing: border-box;
      position: absolute;
      display: block;
      content: "";
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }
    
    #{id}__input {
      position: absolute;
      z-index: -1;
      width: 0;
      height: 0;
      overflow: hidden;
      pointer-events: none;
    }
    
    #{id}__input:checked~#{id}__label::before {
      color: #fff;
      border-color: #007bff;
      background-color: #007bff;
    }
    
    #{id}__input:checked~#{id}__label::after {
      background-color: #fff;
      -webkit-transform: translateX(.75rem);
      transform: translateX(.75rem);
    }
    
    #{id}__input:focus~#{id}__label::before {
      box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    }
    
    #{id}__input:checked~#{id}__label::before {
      color: #fff;
      border-color: #007bff;
      background-color: #007bff;
    }
  </style>

  <input
    id='{id}__input'
    type='checkbox'
    value='true'
    tabindex="-1"
  />

  <label
    id='{id}__label'
    for='{id}__input'
  ></label>
`

RegateSwitch.markup = id => {
  return RegateSwitch.getMarkup()
    .replace(/{id}/g, id)
}

RegateSwitch.setMarkup = markup =>
  RegateSwitch._markup = markup

RegateSwitch.getMarkup = () =>
  RegateSwitch._markup

export default RegateSwitch
