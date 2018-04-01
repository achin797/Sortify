import './Styles/HeaderBar.css';
import React from 'react';
import AddUserButton from './AddUserButton'
import UserIcon from './UserIcon'


class HeaderBar extends React.Component {
    users = [{
        "birthdate": "1997-09-15",
        "country": "CA",
        "display_name": "Guilherme Lameira de Almeida",
        "email": "gui.l.a@hotmail.com",
        "external_urls": {
            "spotify": "https://open.spotify.com/user/guilhermelameira"
        },
        "followers": {
            "href": null,
            "total": 6
        },
        "href": "https://api.spotify.com/v1/users/guilhermelameira",
        "id": "guilhermelameira",
        "images": [
            {
                "height": null,
                "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/14034910_1272457359464951_6186927010831121827_n.jpg?_nc_cat=0&oh=104cad2f6288bf6429234e483cea1dc2&oe=5B312A5B",
                "width": null
            }
        ],
        "product": "premium",
        "type": "user",
        "uri": "spotify:user:guilhermelameira"
    }];

    constructor(props) {
        super(props);

        this.makeUsers = this.makeUsers.bind(this)
    }

    makeUsers() {
        return this.users.map(user => <UserIcon userData={user}/>);
    }

    render() {
        return (
            <div className="header-bar">
                {/*TODO: Implement this component*/}
                <div className="item-container">
                    <AddUserButton/>

                    {this.makeUsers()}
                </div>

            </div>
        );
    }
}

export default HeaderBar;