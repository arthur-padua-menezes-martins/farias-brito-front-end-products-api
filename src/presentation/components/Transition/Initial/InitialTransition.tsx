import React, { Component } from 'react'
import { IPropsTypes } from './script'
import { StyledContainerInitialTransition } from './style'

class ComponentInitialTransition extends Component<IPropsTypes> {
  public timeout = 8000

  constructor (props: IPropsTypes) {
    super(props)
  }

  public componentDidMount () {
    setTimeout(() => {
      this.props.setOnly(false)
    }, this.timeout)
  }

  public render () {
    return (
      <section className='trs__two-second' id="component-initial-transition">
        <StyledContainerInitialTransition timeout={this.timeout} className="container flex-center trs__two-second">
          <svg width="74" height="50" viewBox="0 0 78 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M33.7148 19.2422V31.0781H14.0352V49.5156H0.503906V19.2422H33.7148ZM33.7148 0.320312V12.1562H0.503906V0.320312H33.7148ZM38.1367 0.320312H55.8477L56.543 0.347656H57.2109L57.8438 0.378906L58.4805 0.410156H59.0547L59.6328 0.441406L60.1484 0.46875L60.6602 0.5L61.1445 0.5625L61.5977 0.589844L62.0234 0.652344L62.418 0.683594L62.8086 0.742188L63.1445 0.804688L63.4766 0.863281L63.8086 0.925781L64.1445 1.01562L64.4453 1.07422L64.7773 1.19531L65.1094 1.28516L65.4141 1.41016L65.7188 1.53125L66.0195 1.65234L66.3516 1.77344L66.6562 1.92188L66.9258 2.07422L67.2305 2.22656L67.5312 2.37891L67.8359 2.55859L68.1094 2.74219L68.4102 2.92188L68.7148 3.13281L68.9883 3.34766L69.2305 3.55859L69.5 3.80078L70.2266 4.52734L70.4688 4.80078L70.6836 5.07031L70.8945 5.34375L71.1055 5.64844L71.2891 5.94922L71.5 6.25391L71.6523 6.55469L71.832 6.88672L72.0156 7.28125L72.1953 7.64453L72.3789 8.07031L72.5273 8.46484L72.6484 8.85547L72.8008 9.25L72.9219 9.64453L73.0117 10.0664L73.1055 10.4922L73.1953 10.8867L73.2539 11.3398L73.3164 11.7617L73.375 12.1875L73.4062 12.6094V13.0664L73.4375 13.4883L73.375 14.457V14.9102L73.3164 15.3672L73.2539 15.8203L73.1953 16.2734L73.1055 16.6992L73.0117 17.0898L72.8906 17.5156L72.7695 17.9102L72.6484 18.3008L72.5 18.6641L72.3477 19.0273L72.1641 19.3906L71.9844 19.7539L71.7734 20.0898L71.5586 20.4219L71.3477 20.7539L71.1055 21.0586L70.832 21.3906L70.5625 21.6914L70.2891 21.9961L69.9844 22.2969L69.6523 22.5703L69.3203 22.875L68.957 23.1445L68.2305 23.6914L67.8047 23.9648L67.4141 24.2344L66.9883 24.4766L66.5352 24.75L66.9883 24.9336L67.4414 25.1133L67.8672 25.3281L68.2891 25.5391L69.0781 26.0234L69.4414 26.2656L69.8047 26.5352L70.4688 27.082L71.0742 27.6875L71.3789 27.9883L71.6523 28.293L71.8945 28.625L72.1367 28.9883L72.3477 29.3242L72.5586 29.6875L72.7695 30.0781L72.9531 30.4414L73.1055 30.8359L73.2539 31.2305L73.4062 31.6523L73.5273 32.0781L73.6484 32.5L73.7383 32.957L73.832 33.3789L73.8906 33.8633L73.9219 34.3164L73.9805 34.8008V36.7695L73.9219 37.2852L73.8594 37.7383L73.8008 38.2227L73.7109 38.707L73.6172 39.1602L73.4961 39.6172L73.3477 40.0703L73.1953 40.5547L73.043 41.0078L72.8633 41.4336L72.6484 41.8867L72.4688 42.3086L72.2266 42.7656L71.9844 43.1875L71.8008 43.4609L71.6211 43.7656L71.4375 44.0352L71.2578 44.2773L71.0469 44.5508L70.832 44.793L70.1992 45.5195L69.9844 45.7617L69.5 46.1836L69.2578 46.3984L69.0156 46.5781L68.7461 46.7891L68.5039 46.9727L68.2305 47.1562L67.957 47.3047L67.6836 47.4883L67.4141 47.6406L67.1094 47.7891L66.8086 47.9414L66.5039 48.0938L66.2305 48.2148L65.8984 48.3359L65.5977 48.457L65.2617 48.5781L64.5977 48.7578L64.2656 48.8516L63.9297 48.9414L63.5664 49.0312L63.2656 49.0938L62.9297 49.1523L62.5977 49.1836L62.2344 49.2422L61.8438 49.2734L61.4492 49.3359L60.9922 49.3633L60.5391 49.3945L59.5703 49.457L58.543 49.4844L57.3906 49.5156H18.0312V37.707H54.4531L54.7578 37.6797H55L55.2734 37.6484L55.543 37.6172L55.7852 37.5859L56 37.5273L56.2422 37.4648L56.4531 37.4375L56.6641 37.3438L56.8477 37.2852L57.0586 37.1953L57.2109 37.1016L57.3906 37.0117L57.5742 36.9219L57.7227 36.8008L57.8438 36.7109L57.9961 36.5898L58.1172 36.4375L58.207 36.3164L58.3281 36.1641L58.4219 36.0117L58.5117 35.8633L58.6016 35.7109L58.6641 35.5273L58.7227 35.3477L58.7852 35.1641L58.8125 34.9844L58.8438 34.7734L58.875 34.5586V34.3477L58.9062 34.1367V33.9258L58.875 33.7109L58.8438 33.5312L58.8125 33.3477L58.7852 33.1367L58.7227 32.9844L58.6641 32.8047L58.6016 32.6523L58.543 32.5L58.4492 32.3477L58.3594 32.1992L58.2383 32.0781L58.1484 31.957L57.9062 31.7148L57.7539 31.625L57.6016 31.5039L57.4531 31.4414L57.3008 31.3516L57.0898 31.2617L56.9062 31.1992L56.7266 31.1406L56.5117 31.0781L56.2695 31.0195L56.0586 30.9883L55.8164 30.9258L55.543 30.8984L55.3008 30.8672H55.0312L54.7266 30.8359H38.1367V19H54.8477L55.1523 18.9688L55.4531 18.9375L55.7266 18.9062L56 18.8789L56.3008 18.8477L56.543 18.7852L56.7852 18.7266L57.0273 18.6641L57.2383 18.6055L57.4531 18.5156L57.6328 18.4531L57.8164 18.3633L57.9961 18.2734L58.1484 18.1523L58.3008 18.0586L58.4492 17.9375L58.5703 17.8164L58.6914 17.668L58.8125 17.5469L58.9062 17.3945L58.9961 17.2109L59.0859 17.0625L59.1484 16.8789L59.207 16.6992L59.2695 16.5156L59.3281 16.3359L59.3594 16.1211L59.3906 15.9102V15.0625L59.3594 14.8828L59.3281 14.6992L59.2969 14.5195L59.2383 14.3359L59.1758 14.1836L59.1172 14.0352L59.0547 13.8516L58.9648 13.7305L58.875 13.5781L58.7852 13.457L58.4219 13.0938L58.2695 12.9727L58.1484 12.8828L57.9648 12.793L57.8164 12.6992L57.6641 12.6094L57.4805 12.5508L57.3008 12.4883L57.0898 12.4297L56.875 12.3672L56.6641 12.3086L56.4531 12.2773L56.2109 12.2188H55.9688L55.7266 12.1875L55.4531 12.1562H38.1367V0.320312Z" fill="#231F20"/></svg>
        </StyledContainerInitialTransition>
      </section>
    )
  }
}

export default ComponentInitialTransition
