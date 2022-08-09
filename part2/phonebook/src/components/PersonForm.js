import React, {useState} from 'react'

const PersonForm = ({ name, number, formFunction }) => {
    return (
        <form>
        <div>
          name: <input value={name} onChange={formFunction} />
        </div>
        <div>
          number: <input value={number} onChange={formFunction} />
        </div>
        <div>
          <button type="submit" onClick={()=>{}}>add</button>
        </div>
      </form>
    )
}

export default PersonForm;