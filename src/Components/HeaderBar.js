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
    },
        {
            "birthdate": "1996-03-07",
            "country": "CA",
            "display_name": "Sania Shoaib",
            "email": "sania96sh@gmail.com",
            "external_urls": {
                "spotify": "https://open.spotify.com/user/sania96sh"
            },
            "followers": {
                "href": null,
                "total": 20
            },
            "href": "https://api.spotify.com/v1/users/sania96sh",
            "id": "sania96sh",
            "images": [
                {
                    "height": null,
                    "url": "https://lookaside.facebook.com/platform/profilepic/?asid=10202662090131490&height=200&width=200&ext=1522783773&hash=AeRHwksu6H7LtZ4k",
                    "width": null
                }
            ],
            "product": "premium",
            "type": "user",
            "uri": "spotify:user:sania96sh"
        }];

    constructor(props) {
        super(props);

        this.makeUsers = this.makeUsers.bind(this)
    }

    makeUsers() {
        return this.users.map(user => <UserIcon key={user.id} userData={user}/>);
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