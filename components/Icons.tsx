interface IconsProps {
    liked: boolean
}

const Icons = (props: any) => {

    const styles = {
        icons: `
            stroke-1 stroke-yellow-300 mr-1
            h-5 w-5
        `,
        iconsFill: `
            fill-yellow-300 
            h-5 w-5
        `
    }

    const liked: boolean = props.liked ?? false

    return (
        <div className={`flex mt-2`}>
            <div className={styles.icons}>
                {liked ? (
                     <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.iconsFill} viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                    </div>
                ) : (
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.icons} fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                   
                )}
            </div>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.icons} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            </div>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.icons} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
            </div>
        </div>
    )
}

export default Icons 