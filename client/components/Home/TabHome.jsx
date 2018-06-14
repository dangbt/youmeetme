import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ListItem from './components/ListItem.jsx';
import Friends from './components/Friends.jsx'
import WhoLikeMe from './components/WhoLikeMe.jsx'
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import { _helper } from '../Function/API';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
});
Nav.propTypes = {
    tabs: PropTypes.bool,
    pills: PropTypes.bool,
    card: PropTypes.bool,
    justified: PropTypes.bool,
    fill: PropTypes.bool,
    vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    horizontal: PropTypes.string,
    navbar: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
  }
class TabHome extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      listLikeMe: [],
      listUser: [],
      listFriends: [],
    };
  }
  getListLikeMe = () => {
    _helper.fetchGET(
      '/usersLikeMe', []
    )
      .then((response) => {
        const { status, data } = response;
        if (status == 200) {
          this.setState({ listLikeMe: data.data })
        }
      })
  }
  getUser = () => {
    _helper.fetchGET(
      '/users', []
    )
      .then((response) => {
        const { data, status } = response;
        if (status == 200) {
          this.setState({ listUser: data })
        }
      })

  }
  getFriends = () => {
    const { user } = this.props;
    _helper.fetchAPI(
      '/users/getFriends', { _id: user._id }
    )
      .then((response) => {
        const { data, status } = response;
        if (status == 200) {
          this.setState({ listFriends: data.data[0].friends })

        }
      })

  }
  addFriend = (userID) => {
    _helper.fetchAPI(
      '/users/addFriend', { userID: userID }, [], 'POST'
    )
      .then((response) => {
        const { status, data } = response;
        if (status == 200) {
         this.getListLikeMe();
         this.getFriends();
        }
      })
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  componentDidMount = () => {
    this.getListLikeMe();
    this.getUser();
    this.getFriends();
  }
  render() {
    const { classes, user } = this.props;
    const { listLikeMe, listUser, listFriends } = this.state;
    return (
      <div className="nav-tab">
        <Nav tabs justified>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
             
              <Badge className={classes.margin} badgeContent={4} color="primary"> New Image</Badge>  
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
             <Badge className={classes.margin} badgeContent={listLikeMe.length} color="primary">Who like me</Badge>  
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Friends
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} style={{minHeight: '520px'}} >
          <TabPane tabId="1">
            <Row>
              <Col >
                <ListItem  listUser={listUser} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <WhoLikeMe listLikeMe= {listLikeMe} addFriend={(userID) => this.addFriend(userID)} />
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Friends user={user} listFriends={listFriends} />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
export default withStyles(styles)(TabHome);