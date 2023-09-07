import React, { useEffect } from 'react'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import Section from './layouts/Section'
// import SectionRow from './layouts/SectionRow'
// import SectionTitle from './layouts/SectionTitle'
// import Carousel from './components/Carousel/Carousel'
import DefaultHeader from './layouts/DefaultHeader'
import FullWideSection from './layouts/FullWideSection'
import DefaultDivider from './layouts/DefaultDivider'
import Jumbotron from './layouts/Jumbotron'
import MediaCard from './components/MediaCard/MediaCard'
import GeoCard from './components/GeoCard/GeoCard'

// const UPDATE_DEADLINE = 'August 28, 2023'
const App: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('d-flex')
    document.body.classList.add('h-100')
    document.body.classList.add('text-center')
    document.body.classList.add('text-bg-dark')
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
                        <Jumbotron id={'charity-jumbotron'} title={'Фотографії та відео'}>
                            <p className="col-lg-6 mx-auto mb-4">
                                This faded back jumbotron is useful for placeholder content.
                                It&aposs also a great way to add a bit of context to a page or section when no content is available and to encourage visitors to take a specific action.
                            </p>
                            <button className="btn btn-primary px-5 mb-5" type="button">
                                Call to action
                            </button>
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
                                        text={'Для гостей, що будуть без машини ми замовили автобус, що буде вас очікувати...'}
                                        smallText={'11:00'}
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
                                        title={'Церемонія вінчання'}
                                        text={'Для гостей, що будуть без машини ми замовили автобус, що буде вас очікувати...'}
                                        smallText={'13:00'}
                                        location={{
                                          address: 'Вінчання',
                                          lat: 50.36077242564862,
                                          lng: 30.51788447302853
                                        }}
                                    />
                                    <GeoCard
                                        id={'restaurant-geo-card'}
                                        title={'Ресторан'}
                                        text={'Для гостей, що будуть без машини ми замовили автобус, що буде вас очікувати...'}
                                        smallText={'15:00'}
                                        linkText={'Відкрити в Google Maps'}
                                        linkHref={'https://goo.gl/maps/f1BmUA2ktRuHSHxU6'}
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
                            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 pt-4">
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
                </DefaultLayout>
        </div>
  )
}

export default App
