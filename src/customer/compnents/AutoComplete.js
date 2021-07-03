import React from 'react'
import PlacesAutoComplete from 'react-places-autocomplete';

function AutoComplete({address, setAddress, handleSelect}) {
    return (
        <div>
            <PlacesAutoComplete value={address} onChange={setAddress} onSelect={handleSelect} >
                {({getInputProps, suggestions, getSuggestionItemProps, loading}) => <div>
                    <input 
                        {...getInputProps({placeholder: "Address"})}
                        name="pickfromCoordinates"
                        className="form-control form-control-sm"
                    />
                    <div>
                        {loading ? <div>...loading</div> : null}
                        {suggestions.map(suggestion => {
                            const style = {
                                backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                            }
                            return <div {...getSuggestionItemProps(suggestion, {style})}>{suggestion.description}</div>
                        })}
                    </div>
                </div>}
            </PlacesAutoComplete>
        </div>
    )
}

export default AutoComplete
