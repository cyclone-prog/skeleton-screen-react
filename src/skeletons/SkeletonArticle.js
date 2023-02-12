import SkeletonElement from "./SkeletonElement";

const SkeletonArticle = () => {
    return (
        <div className="skeleton-wrapper">
            <div class="skeleton-article">
                    
                <SkeletonElement type="title"/>
                <SkeletonElement type="text"/>
                <SkeletonElement type="text"/>
                <SkeletonElement type="text"/>

            </div>
        </div>
    )
}
export default SkeletonArticle;