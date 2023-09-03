import React, { useEffect } from 'react'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import Section from './layouts/Section'
import SectionRow from './layouts/SectionRow'
import SectionTitle from './layouts/SectionTitle'
// import Carousel from './components/Carousel/Carousel'
import DefaultHeader from './layouts/DefaultHeader'
import FullWideSection from './layouts/FullWideSection'
import DefaultDivider from './layouts/DefaultDivider'

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
                    headerPrepend={<><FullWideSection id={'full-width-section'} /><DefaultHeader/></>}
                    header={<DefaultHeader isSticky={true}/>}
                    footer={<div></div>}
                >
                    <Section id={'where-section'}>
                        <SectionRow id={'where-section-title'}>
                                <SectionTitle>
                                    Коли <span>та</span> Де
                                </SectionTitle>
                        </SectionRow>
                        <div style={{ height: '100px' }}></div>
                    </Section>
                   <DefaultDivider/>
                    <Section id={'where-section'}>
                        <SectionRow id={'where-section-title'}>
                            <div>
                                <SectionTitle>
                                    Коли <span>та</span> Де
                                </SectionTitle>
                            </div>
                        </SectionRow>
                        <div style={{ height: '100px' }}></div>
                    </Section>
                </DefaultLayout>
        </div>
  )
}

export default App
