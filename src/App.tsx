import React, { useEffect } from 'react'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import Section from './layouts/Section'
import DefaultHeader from './layouts/DefaultHeader'
import FullWideSection from './layouts/FullWideSection'
import DefaultDivider from './layouts/DefaultDivider'
import Jumbotron from './layouts/Jumbotron'
import MediaCard from './components/MediaCard/MediaCard'
import GeoCard from './components/GeoCard/GeoCard'
import CheckBoxList from './components/CheckBoxList/CheckBoxList'
import EmbeddedIframe from './components/EmbededIframe/EmbeddedIframe'

// const UPDATE_DEADLINE = 'August 28, 2023'
const App: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('d-flex')
    document.body.classList.add('h-100')
  }, [])

  return (
        <div className="App">
                <DefaultLayout
                    headerPrepend={
                    <>
                        <FullWideSection id={'full-width-section'} />
                        <DefaultHeader/>
                    </>}
                    header={<DefaultHeader isSticky={true}/>}
                    footer={<div></div>}
                >
                    <Section id={'charity-section'}>
                        <Jumbotron id={'charity-jumbotron'} title={'Благодійний збір замість квітів!!!'}>
                                <div className='col-lg-6 mx-auto mb-1 text-start p-4'>
                                    <p className="">
                                        Шановні гості. Ми маємо змогу святкувати наше весілля лише завдяки
                                        нашим воїнам які боронять наш спокій. Проте ми всі чудово розуміємо
                                        наскільки це складне завдання і в яких умовах живуть бійці.
                                        Тому ми хотіли потурбуватися про наших військових і спільно з благодійним фондом
                                        &quot;Рій&quot; придбати
                                        20 спальних систем, які допоможуть нашим військовим в дощ та холод
                                        почуватися комфортно. Загальна сума збору - 130 тисяч гривень.
                                        Посилання на інформацію про спальні системи
                                    </p>
                                    <a href={'https://secure.wayforpay.com/donate/d75e395ad0193'} className="btn d-block my-2 btn-outline-success">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cash-coin mx-2" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
                                            <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
                                            <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
                                            <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
                                        </svg>
                                        Донатимо усі разом сюди!
                                    </a>
                                    <a href={'https://www.riyukraine.com'} className="btn d-block mb-2 btn-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bounding-box mx-2" viewBox="0 0 16 16">
                                            <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2H5zm6 1v2h2v6h-2v2H5v-2H3V5h2V3h6zm1-2h3v3h-3V1zm3 11v3h-3v-3h3zM4 15H1v-3h3v3zM1 4V1h3v3H1z"/>
                                        </svg>
                                        Посилання на Благодійний Фонд &quot;РІЙ&quot;
                                    </a>
                                     <EmbeddedIframe id={'youtube-embed'} embedSrc={'https://video.wixstatic.com/video/f17a2d_055857e9e14c47ef814176d2a41f2f56/720p/mp4/file.mp4'}/>
                                </div>
                        </Jumbotron>
                    </Section>
                    <DefaultDivider/>
                    <Section id={'where-and-when-section'}>
                        <Jumbotron id={'where-and-when-jumbotron'} title={'Коли та де?'}>
                            <div className='d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center'>
                                <div className='list-group'>
                                    <GeoCard
                                        id={'bus-geo-card'}
                                        title={'Автобус до церемонії вінчання'}
                                        titleIcon={
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                        className="bi bi-bus-front-fill me-1" viewBox="0 0 16 16">
                                            <path
                                                d="M16 7a1 1 0 0 1-1 1v3.5c0 .818-.393 1.544-1 2v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V14H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a2.496 2.496 0 0 1-1-2V8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1V2.64C1 1.452 1.845.408 3.064.268A43.608 43.608 0 0 1 8 0c2.1 0 3.792.136 4.936.268C14.155.408 15 1.452 15 2.64V4a1 1 0 0 1 1 1v2ZM3.552 3.22A43.306 43.306 0 0 1 8 3c1.837 0 3.353.107 4.448.22a.5.5 0 0 0 .104-.994A44.304 44.304 0 0 0 8 2c-1.876 0-3.426.109-4.552.226a.5.5 0 1 0 .104.994ZM8 4c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9c1.876 0 3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44.304 44.304 0 0 0 8 4Zm-3 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-7 0a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1Z"/>
                                        </svg>}
                                        text={'Для гостей, що будуть без машини ми замовили автобус, що буде вас очікувати на метро Теремки біля виходу з метро.'}
                                        smallText={'12:00 MERCEDES-BENZ АI8184HT 0635157273'}
                                        linkHref={'https://goo.gl/maps/wVeHuSCUMrk1MxxN9'}
                                        linkText={'Відкрити в Google Maps'}
                                        location={{
                                          address: 'М.Теремки',
                                          lat: 50.367075047058556,
                                          lng: 30.45438221260945
                                        }}
                                    />
                                    <GeoCard
                                        id={'ceremony-geo-card'}
                                        title={'Церемонія вінчання "Пирогово"'}
                                        titleIcon={
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill me-1" viewBox="0 0 16 16">
                                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                                            </svg>
                                        }
                                        text={'Для бажаючих бути присутніми на нашій церемонії вінчання на власних автомобілях, велике прохання передати номер автомобіля нареченому. Під кожне авто' +
                                            ' буде індивідувальний пропуск. Прохання не запізнюватися, адже можуть виникнути проблеми із заїздом на територію музею Пирогово. Детальний маршрут як заїхати на локацію ви можете побачити на відео. ' +
                                            'Прохання паркуватися на схилі після церкви.'}
                                        smallText={'12:30'}
                                        linkText={'Локація в Google Maps'}
                                        linkHref={'https://goo.gl/maps/f1BmUA2ktRuHSHxU6'}
                                        linkText2={'Маршрут в Google Maps'}
                                        linkHref2={'https://goo.gl/maps/CYef1dKyoGFGtQ5WA'}
                                        location={{
                                          address: 'Вінчання',
                                          lat: 50.36077242564862,
                                          lng: 30.51788447302853
                                        }}
                                    />
                                    <EmbeddedIframe id={'youtube-embed'} embedSrc={'https://www.youtube.com/embed/P-CaBn5REFk'}/>
                                    <GeoCard
                                        id={'restaurant-geo-card'}
                                        title={'Ресторан "Сажа"'}
                                        titleIcon={
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-down me-2" viewBox="0 0 16 16">
                                                <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708L7.293 1.5Z"/>
                                                <path d="M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm.354 5.854 1.5-1.5a.5.5 0 0 0-.708-.707l-.646.646V10.5a.5.5 0 0 0-1 0v2.793l-.646-.646a.5.5 0 0 0-.708.707l1.5 1.5a.5.5 0 0 0 .708 0Z"/>
                                            </svg>
                                        }
                                        text={'Очікуємо вас у ресторані! На локації вас буде чекати фотозона з палароїдом, де ви можете залишити свої побажання та фотографію нареченим на згадку. ' +
                                            ' Фотографії можна буде зробити під час усього весілля, тому можете не поспішати.'}
                                        smallText={'15:00'}
                                        linkText={'Відкрити в Google Maps'}
                                        linkHref={'https://goo.gl/maps/22CZ7Hf3Zsu47By28'}
                                        location={{
                                          address: 'Ресторан',
                                          lat: 50.441882055401955,
                                          lng: 30.358070634632547
                                        }}
                                    />
                                </div>
                            </div>
                        </Jumbotron>
                    </Section>
                   <DefaultDivider/>
                    <Section id={'media-section'} >
                        <Jumbotron id={'media-jumbotron'} title={'Фотографії та відео нашого весілля'}>
                            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 pt-4 px-2">
                                <div className="col">
                                    <MediaCard
                                        imageUrl={'photographer-link-img.png'}
                                        title={'Фотографії з весілля'}
                                        deadlineNotes={'09.10.2023'}
                                        href={'https://drive.google.com/drive/folders/1Sobcy5sB1olwhnhvjFtaOgI2AFVgWY-q'}
                                    />
                                </div>
                                <div className="col">
                                    <MediaCard
                                        imageUrl={'videographer-link-img.jpg'}
                                        title={'Відео з весілля'}
                                        deadlineNotes={'09.10.2023'}
                                        href={'https://fex.net/uk/s/rps2rkd'}
                                    />
                                </div>
                                <div className="col">
                                    <MediaCard
                                        imageUrl={'ownphoto-link-img.jpg'}
                                        title={'Завантажуйте ваші фотографії'}
                                        deadlineNotes={'Будь-коли'}
                                        href={'https://drive.google.com/drive/folders/1s3jHNFoTCoIDbAhBFbx4hkUODIvzhF1I?usp=sharing'}
                                    />
                                </div>
                            </div>
                        </Jumbotron>
                    </Section>
                    <DefaultDivider/>
                    <Section id={'checklist-section'}>
                        <Jumbotron id={'checklist-jumbotron'} title={'Чекліст'}>
                            <p className="col-lg-6 mx-auto mb-1 text-start p-4">
                                Для того, щоб вам було комфортно та легко на цьому святі,
                                ми підготували невеликий чек-лист, який допоможе вам бути
                                готовими до усього, що може трапитися на весіллі.
                                Цей чек-лист містить короткі пункти, які допоможуть вам
                                насолодитися цією чудовою подією разом з нами.
                            </p>
                            <div className='d-flex flex-column flex-md-row p-4 gap-4 align-items-center justify-content-center'>
                                <CheckBoxList id={'wedding-checklist-checkbox'}/>
                            </div>
                        </Jumbotron>
                    </Section>
                </DefaultLayout>
        </div>
  )
}

export default App
