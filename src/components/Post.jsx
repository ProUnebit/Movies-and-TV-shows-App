import classes from './Post.module.scss'

const Post = () => {



    return (
        <div className={classes.post}>
            <p className={classes.author}>Post Comonent</p>
            <p className={classes.text}>Text</p>
        </div>
    )
}

export default Post