import SkeletonElement from "./SkeletonElement"

const SkeletonUser = () => {
    return (
        <div className="skeleton-wrapper">
            <div>
                <SkeletonElement type="avatar"/>
                <SkeletonElement type="title"/>
                <SkeletonElement type="text"/> 
                <SkeletonElement type="text"/>      

            </div>
        </div>
    )
}
export default SkeletonUser