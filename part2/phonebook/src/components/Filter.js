const Filter = ({filterName, handlfilterNameChange}) => {
    return (
        <div>
            filter shown with: <input value={filterName} onChange={handlfilterNameChange} placeholder="enter filter name" />
        </div>
    )
}
export default Filter