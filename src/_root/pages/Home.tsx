import Loader from '@/components/shared/Loader';
import PostCard from '@/components/shared/PostCard';
import WeatherWidget from '@/components/WeatherWidget'
import { useGetPosts, useGetRecentPosts } from '@/lib/react-query/queriesAndMutations';
import { Models } from 'appwrite';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


const Home = () => {

  const {ref, inView} = useInView();
  
  const {fetchNextPage, hasNextPage} = useGetPosts();
  const {data: posts, isPending: isPostLoading, isError: isErrorPosts} = useGetRecentPosts();

  useEffect(() => {
    if(inView ) fetchNextPage();
  }, [inView])
  return (

    <>
    <div className='flex flex-1'>
        <div className='home-container'>
          <div className='home-posts'>
            <h2 className='h3-bold md:h2-bold text-left w-full'>Home Feed</h2>

            {isPostLoading && !posts ? (
              <Loader />
            ) : (
                <ul className='flex flex-col flex-1 gap-9 w-full'>
                  {posts?.documents.map((post: Models.Document) => (
                    <PostCard post={post} key={post.caption}/>
                  ))}
                </ul>
            )}
          </div>
        </div>

        
        
      </div>

     <div className='fixed bottom-0 left-0 w-full z-10 flex justify-center items-center pl-64 backdrop-blur-md bg-opacity-15'>
        <WeatherWidget city='Kharar' />
      </div>
    </>
    
      
  
  )
}

export default Home
