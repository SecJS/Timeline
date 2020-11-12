# Timeline ⏱

> Very simple Timeline repository for NodeJS

<p>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/secjs/timeline?style=for-the-badge&logo=appveyor">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/secjs/timeline?style=for-the-badge&logo=appveyor">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?style=for-the-badge&logo=appveyor">
</p>

The intention behind this repository is to always maintain a viable and simple Timeline repository to use in any type of `NodeJS Framework`

<img src=".github/timeline.png" width="200px" align="right" hspace="30px" vspace="100px">

## Installation

You can install the Timeline repository using;

```bash
yarn add @SecJS/Timeline
```

## Usage

> You can call the Timeline repository stuffs like this;

```js
import { 
    Timeline,    
    CreateTimelineDto, 
    TimelineRepository,    
    TimelineCauserEnum,
    TimelineMethodEnum,
} from '@secjs/timeline/typeorm'

// Now you just need to run the migrations inside @secjs/timeline/typeorm and create a timeline using all the stuffs
const timeline = await this.timelineRepository(createTimelineDto: CreateTimelineDto)
```
