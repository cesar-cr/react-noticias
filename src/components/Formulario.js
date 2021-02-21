import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({guardarCategoria}) => {
    // Generar opciones
    const OPCIONES = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value:'technology', label : 'Tecnología'}
    ]
    const [error, guardarError] = useState(false);
    // utilizar CustomHook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    const buscarNoticias = (e) => {
        e.preventDefault();

        // Validar que exista una opcion
        if (categoria.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarCategoria(categoria);

    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="row s12 m8 offset-m2">
                <form
                    onSubmit={ buscarNoticias }
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoria</h2>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

Formulario.propTypes = {
    guardarCategoria : PropTypes.func.isRequired
}

export default Formulario;
