import React from 'react';
import image1 from './image/one.jpg';
import image2 from './image/two.jpg'
import image3 from './image/three.jpg'
import image4 from './image/four.jpg'
import UserCard from './userCard';
import  Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
const Profile =() =>
{
  return(
   
      <div className="ui equal width grid">
        <div className="equal width row">
        <div className="column"></div>
        <div className="column"><h2>Profiles</h2></div>
        </div>
      <div className="equal width row">
      <div className="column"><UserCard image={image4} name="Daniel" statement='Profile1'/></div><p>Gavin Forbes was elected in November 2008. The Senior Vice President of International Management Group (IMG), Forbes has been involved with tennis throughout his life. His father, Gordon, played professional tennis. Forbes is based out of the IMG headquarters in Cleveland.</p>
      <div className="column"><UserCard image={image1} name="Stanislas" statement='Profile2'/></div><p>Former Kenyan Davis Cup player Eno Polo was born and raised in Kenya to Italian and French parents. After completing high school in Kenya he attended university in Texas, USA. After playing professional tennis on the ATP circuit for four years, he moved into a 14-year professional career at Nike followed by roles at Juventus F.C., Havaianas, and Seven Global, a joint venture with David Beckham.</p>
      <div className="column"><UserCard image={image2} name="Novak" statement='Profile3'/></div><p>Mark Knowles, an ATP Board member from 2020, is a former World No. 1 doubles player. During his 20 years on the ATP Tour, the Bahamian won 55 doubles titles, finished as the No. 1 doubles team in 2002 and '04 alongside long-time partner Daniel Nestor, and individually held down the No. 1 ATP Doubles Ranking for a total of 65 weeks. Knowles also played at UCLA from 1990-92 and represented the Bahamas in the Olympics five times. Since his retirement at the 2012 US Open, Knowles has worked for the Tennis Channel, providing on-air commentary and analysis.</p>
      <div className="column"><UserCard image={image3} name="Rafa" statement='Profile4'/></div><p>Herwig Straka was elected in November 2018. After studying law and business in Austria, he started his career in banking in New York before he turned to tennis. In 1991 he founded the e|motion group, an event and live marketing company, which owns and promotes sporting events in different areas (tennis, golf, football, mountain-biking). He is also actively involved in athlete management, including tennis players like former World No. 1 Thomas Muster.</p>
      
    </div>
    {/* <CardGroup>
  <Card>
    <Card.Img variant="top" src="./image/one.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      Gavin Forbes was elected in November 2008. The Senior Vice President of International Management Group (IMG), Forbes has been involved with tennis throughout his life. His father, Gordon, played professional tennis. Forbes is based out of the IMG headquarters in Cleveland.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small classNameName="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="{image2}" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      Former Kenyan Davis Cup player Eno Polo was born and raised in Kenya to Italian and French parents. After completing high school in Kenya he attended university in Texas, USA. After playing professional tennis on the ATP circuit for four years, he moved into a 14-year professional career at Nike followed by roles at Juventus F.C., Havaianas, and Seven Global, a joint venture with David Beckham.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small classNameName="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="{image3}" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      Mark Knowles, an ATP Board member from 2020, is a former World No. 1 doubles player. During his 20 years on the ATP Tour, the Bahamian won 55 doubles titles, finished as the No. 1 doubles team in 2002 and '04 alongside long-time partner Daniel Nestor, and individually held down the No. 1 ATP Doubles Ranking for a total of 65 weeks. Knowles also played at UCLA from 1990-92 and represented the Bahamas in the Olympics five times. Since his retirement at the 2012 US Open, Knowles has worked for the Tennis Channel, providing on-air commentary and analysis.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small classNameName="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup> */}
  </div>
  )
}
export default Profile;