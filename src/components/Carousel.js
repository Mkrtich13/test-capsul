import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Icon } from 'react-materialize';
import range from 'lodash/range';

export default class Carousel extends React.Component {
    componentWillMount() {
        this.setState({
          children: [],
          activeItemIndex: 0,
        });
    }

    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const familyMembers = this.props.familyMembers;
    return (
        <div style={{"padding":"0 60px","maxWidth":900,"margin":"0 auto"}}>
            <ItemsCarousel
                gutter={10}
                chevronWidth={100}
                numberOfCards={5}
                slidesToScroll={1}
                outsideChevron={true}
                showSlither={true}
                firstAndLastGutter={true}
                requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                activeItemIndex={this.state.activeItemIndex}
                activePosition={'center'}
                rightChevron={<Icon className="white-text">arrow_forward_ios</Icon>}
                leftChevron={<Icon className="white-text">arrow_back_ios</Icon>}
            >
            {familyMembers.map((member, i) =>
                <div key={i} className="w-75" style={{margin: 'auto'}}>
                    <img className="circle responsive-img" src={member.image} alt="" />
                    <div className="white-text center-align">{ member.firstName }</div>
                </div>
            )}
            </ItemsCarousel>
      </div>
    );  
  }
} 