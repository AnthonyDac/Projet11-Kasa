import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/CardComponent';
import './HomePage.css';

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [], // Initialiser le tableau de données
            loading: true,
        };
    }

    componentDidMount() {
        // Effectuer la requête fetch dans componentDidMount
        fetch('/src/data/data.json')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ data, loading: false }); // Mettre à jour le state avec les données récupérées
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
                this.setState({ loading: false }); // Mettre à jour l'état de chargement en cas d'erreur
            });
    }

    render() {
        const { data, loading } = this.state;
        if (loading) {
            return <div>Chargement en cours...</div>;
        }
        return (
            <>
                <div className="cardContainer">
                    {data.map((element) => (
                        <Card key={element.id} id={element.id} pictures={element.pictures} title={element.title} />
                    ))}
                </div>
            </>
        );
    }
}

export default HomePage;
