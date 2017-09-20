import React from 'react'

const TodoForm =(props) =>{
    return (<form>
            <button type="submit"  className="buttonRules"  id="CEO" onClick={props.ApplyOffer}>Apply CEO Rules</button>
            <button type="submit"  className="buttonRules"  id="COO" onClick={props.ApplyOffer}>Apply COO Rules</button>

            
            <button type="submit" className="buttonProducts" id="apple"  onClick={props.addProduct} >Apple</button>
            <button type="submit" className="buttonProducts"  id="coffee" onClick={props.addProduct} >Coffee</button>
            <button type="submit" className="buttonProducts"  id="fruitejuce" onClick={props.addProduct} >Fruit Juice</button>

           

    </form>)
}

export default TodoForm