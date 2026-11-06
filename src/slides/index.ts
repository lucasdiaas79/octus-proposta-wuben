import type { ComponentType } from 'react'
import S01Cover from './S01Cover'
import S02Hub from './S02Hub'
import S03Qg from './S03Qg'
import S03Dre from './S03Dre'
import S04Opportunity from './S04Opportunity'
import S05Gains from './S05Gains'
import S06Rings from './S06Rings'
import S09Data from './S09Data'
import S08Platform from './S08Platform'
import S09House from './S09House'
import S07Calendar from './S07Calendar'
import S06Levers from './S06Levers'
import S07Plan from './S07Plan'
import S08Projection from './S08Projection'
import S09Method from './S09Method'
import S10Rollout from './S10Rollout'
import S11Closing from './S11Closing'

export const slides: { Component: ComponentType; theme: 'dark' | 'light'; bg: string }[] = [
  { Component: S01Cover, theme: 'dark', bg: '#000000' },
  { Component: S02Hub, theme: 'dark', bg: '#0A2326' },
  { Component: S03Qg, theme: 'dark', bg: '#000000' },
  { Component: S03Dre, theme: 'light', bg: '#EEF2F2' },
  { Component: S04Opportunity, theme: 'dark', bg: '#000000' },
  { Component: S05Gains, theme: 'dark', bg: '#0A2326' },
  { Component: S06Rings, theme: 'light', bg: '#EEF2F2' },
  { Component: S09Data, theme: 'dark', bg: '#000000' },
  { Component: S08Platform, theme: 'dark', bg: '#0A2326' },
  { Component: S09House, theme: 'dark', bg: '#000000' },
  { Component: S07Calendar, theme: 'dark', bg: '#0A2326' },
  { Component: S06Levers, theme: 'dark', bg: '#000000' },
  { Component: S07Plan, theme: 'light', bg: '#EEF2F2' },
  { Component: S08Projection, theme: 'dark', bg: '#000000' },
  { Component: S09Method, theme: 'light', bg: '#EEF2F2' },
  { Component: S10Rollout, theme: 'dark', bg: '#0A2326' },
  { Component: S11Closing, theme: 'dark', bg: '#000000' },
]
