import { useRouter } from 'next/router';

const Post = () =>{
    const router = useRouter();
    const {bracket, comment}  = router.query
    return <p>Post: {bracket, comment} </p>
}
export default Post;