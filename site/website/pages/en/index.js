/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props
    const {baseUrl, docsUrl} = siteConfig
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    )

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    )

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    )

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    )

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('download.html')}>Getting started</Button>
            <Button href={docUrl('options.html')}>Documentation</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props
    const {baseUrl} = siteConfig

    const SubTitle = () => (
      <div
        className="productShowcaseSection"
        style={{textAlign: 'center'}}>
        <h2>Designed for HTML Select tag</h2>
        <MarkdownBlock>Multiple Select has been designed to reduce development time and to require no specific knowledge from developers. It is both featherweight and feature-rich.</MarkdownBlock>

        <div id="gg" style={{width: '330px', margin: '0 auto !important'}}></div>
      </div>
    )

    const Features = () => (
      <div className="container paddingBottom features">
        <div className="wrapper">
          <div className="gridBlock">
            <div className="blockElement fourByGridBlock">
              <div className="blockContent">
                <h2>Features</h2>
                <MarkdownBlock>- Default option allows showing a checkbox.</MarkdownBlock>
                <MarkdownBlock>- Ability to grouping elements.</MarkdownBlock>
                <MarkdownBlock>- Supports to show multiple items in a single row.</MarkdownBlock>
                <MarkdownBlock>- Select all options.</MarkdownBlock>
                <MarkdownBlock>- Feature to show placeholder.</MarkdownBlock>
              </div>
            </div>

            <div className="blockElement fourByGridBlock">
              <div id="latest-release" className="blockContent">
                <h2>Latest release 2.1.1 (2025-3-12)</h2>
                <MarkdownBlock></MarkdownBlock>
                <MarkdownBlock>* **New:** Added vue3 and bootstrap5 support.</MarkdownBlock>
                <MarkdownBlock>* **New:** Added lint for js, scss, spell and editor.</MarkdownBlock>
                <MarkdownBlock>* **New:** Added `classInput` option to show class of input radio/checkbox.</MarkdownBlock>
                <MarkdownBlock>* **New:** Added `filterSelectAll` option to show/hide the select all checkbox in the filter.</MarkdownBlock>
                <MarkdownBlock>* **New:** Added `resetFilter` method to reset the filter.</MarkdownBlock>
                <MarkdownBlock>* **New:** Added id-ID locale.</MarkdownBlock>
                <MarkdownBlock>* **Update:** Updated `placeholder` class to `ms-placeholder`.</MarkdownBlock>
                <MarkdownBlock>* **Update:** Fixed alignment issue of single mode in the bootstrap theme.</MarkdownBlock>
                <MarkdownBlock></MarkdownBlock>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <SubTitle />
          <Features />
        </div>
      </div>
    )
  }
}

module.exports = Index
