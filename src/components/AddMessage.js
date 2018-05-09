import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = (props) => {
    let input

    return (
        <section id="new-message">
            <input type="text"
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        props.sendMessage(input.value, 'Me')
                        input.value = ''
                    }
                }}
                ref={(node) => {
                    input = node
                }}
            />
        </section>
    )
}

AddMessage.PropTypes = {
    dispatch: PropTypes.func.isRequired
}

export default AddMessage