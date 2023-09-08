import React from 'react'
interface CheckBoxListProps {
  children?: React.ReactNode
  id: string
}

interface CheckBoxProps {
  title: string
  text: string
}

const CheckBox: React.FC<CheckBoxProps> = ({ title, text }) => (
    <label className="list-group-item d-flex gap-2 text-start">
        <input className="form-check-input flex-shrink-0" type="checkbox" value=""/>
        <span>
        {title}
        <small className="d-block text-body-secondary">{text}</small>
      </span>
    </label>
)

const CheckBoxList: React.FC<CheckBoxListProps> = ({ children, id }) => {
  const checkList = [
    { title: 'Час', text: 'Приходьте вчасно на церемонію та у ресторан.' },
    { title: 'Мобільний телефон', text: 'Утримуйте телефон в режимі "без звуку" під час церемонії і важливих моментів.' },
    { title: 'Фото і відео', text: 'Фотографуйте все що забажаєте. Та не забудьте завантажити зроблені фотографії за посиланням на сайті' },
    { title: 'Безпека', text: 'Якщо ви плануєте пити алкоголь, не керуйте автомобілем після весілля. Забезпечте собі безпечний спосіб дістатися додому.' },
    { title: 'Повітряна тривога', text: 'У разі повітряної тривоги дослухайтеся порад ведучого та перейдіть у найближче сховище' },
    { title: 'Донати', text: 'Донатьте-донатьте-донатьте!' }
  ]

  return <div className="list-group">
      {checkList.map(({ title, text }) => (
          <CheckBox key={title} title={title} text={text}/>
      ))}
  </div>
}

export default CheckBoxList
