import React, { useContext } from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { FavouriteContext } from "../../context/FavouriteContext";

const cardStyle = {
    margin: "10px",
    maxWidth: "300px"
};

const starStyle = {
    marginLeft: "110px"
};

const CardItem = ({ category, img, imageUrl, header, headerUrl, footer }) => {
    const { artists, tracks, albums, playlists } = useContext(FavouriteContext);
    const [artist, setArtist] = artists;
    const [track, setTrack] = tracks;
    const [album, setAlbum] = albums;
    const [playlist, setPlaylist] = playlists;

    const handleClick = () => {
        const card = {
            img: img,
            imageUrl: imageUrl,
            header: header,
            headerUrl,
            footer
        };
        setCard(card);
    };

    const setCard = card => {
        switch (category) {
            case "album":
                if (!album.includes(Object.values(card))) {
                    setAlbum(prevAlbums => [...prevAlbums, card]);
                }
                break;
            case "artist":
                if (!artist.includes(Object.values(card))) {
                    setArtist(prevArtists => [...prevArtists, card]);
                }
                break;
            case "track":
                if (!track.includes(Object.values(card))) {
                    setTrack(prevTracks => [...prevTracks, card]);
                }
                break;
            case "playlist":
                if (!playlist.includes(Object.values(card))) {
                    setPlaylist(prevPlaylists => [...prevPlaylists, card]);
                }
                break;
            default:
                break;
        }
    };

    return (
        <Card style={cardStyle} className='column'>
            <Image
                src={img}
                alt=""
                wrapped
                as='a'
                ui={false}
                href={imageUrl}
                target='_blank'
            />
            <Card.Content>
                <Card.Header>{footer}</Card.Header>
                <Card.Description as='a' href={headerUrl} target='_blank'>
                    {header}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <span style={starStyle} onClick={handleClick}>
                    <Icon name='star' size='large' />
                </span>
            </Card.Content>
        </Card>
    );
};

export default CardItem;
