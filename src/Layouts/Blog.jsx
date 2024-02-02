import { BlogCard } from "src/components/index";

const Blog = () => {
  const blog = [
    {
      id: "1",
      title: "Meditation 101",
      text: "Learn all about meditation.",
      description:
        "Minim non consectetur ipsum aute qui laborum magna anim id. Consequat et tempor voluptate proident. Ad veniam culpa minim ea aliqua cillum nulla velit magna esse. Magna consequat veniam proident anim laboris tempor aliquip est. Minim non consectetur ipsum aute qui laborum magna anim id. Consequat et tempor voluptate proident. Ad veniam culpa minim ea aliqua cillum nulla velit magna esse. Magna consequat veniam proident anim laboris tempor aliquip est. Minim non consectetur ipsum aute qui laborum magna anim id. Consequat et tempor voluptate proident. Ad veniam culpa minim ea aliqua cillum nulla velit magna esse. Magna consequat veniam proident anim laboris tempor aliquip est. Minim non consectetur ipsum aute qui laborum magna anim id. Consequat et tempor voluptate proident. Ad veniam culpa minim ea aliqua cillum nulla velit magna esse. Magna consequat veniam proident anim laboris tempor aliquip est. Minim non consectetur ipsum aute qui laborum magna anim id. Consequat et tempor voluptate proident. Ad veniam culpa minim ea aliqua cillum nulla velit magna esse. Magna consequat veniam proident anim laboris tempor aliquip est. Minim non consectetur ipsum aute qui laborum magna anim id. Consequat et tempor voluptate proident. Ad veniam culpa minim ea aliqua cillum nulla velit magna esse. Magna consequat veniam proident anim laboris tempor aliquip est. Minim non consectetur ipsum aute qui laborum magna anim id. Consequat et tempor voluptate proident. Ad veniam culpa minim ea aliqua cillum nulla velit magna esse. Magna consequat veniam proident anim laboris tempor aliquip est. Minim non consectetur ipsum aute qui laborum magna anim id. Consequat et tempor voluptate proident. Ad veniam culpa minim ea aliqua cillum nulla velit magna esse. Magna consequat veniam proident anim laboris tempor aliquip est.",
      postId: "1",
      image: "images/meditation101.png",
    },
    {
      id: "2",
      title: "30 days of Meditation",
      text: "Challenge yourself with this plan.",
      description:
        "Minim non consectetur ipsum aute qui laborum magna anim id. Consequat et tempor voluptate proident. Ad veniam culpa minim ea aliqua cillum nulla velit magna esse. Magna consequat veniam proident anim laboris tempor aliquip est. Minim non consectetur ipsum aute qui laborum magna anim id. Consequat et tempor voluptate proident. Ad veniam culpa minim ea aliqua cillum nulla velit magna esse. Magna consequat veniam proident anim laboris tempor aliquip est. Minim non consectetur ipsum aute qui laborum magna anim id. Consequat et tempor voluptate proident. Ad veniam culpa minim ea aliqua cillum nulla velit magna esse. Magna consequat veniam proident anim laboris tempor aliquip est. Minim non consectetur ipsum aute qui laborum magna anim id. Consequat et tempor voluptate proident. Ad veniam culpa minim ea aliqua cillum nulla velit magna esse. Magna consequat veniam proident anim laboris tempor aliquip est. Minim non consectetur ipsum aute qui laborum magna anim id. Consequat et tempor voluptate proident. Ad veniam culpa minim ea aliqua cillum nulla velit magna esse. Magna consequat veniam proident anim laboris tempor aliquip est. Minim non consectetur ipsum aute qui laborum magna anim id. Consequat et tempor voluptate proident. Ad veniam culpa minim ea aliqua cillum nulla velit magna esse. Magna consequat veniam proident anim laboris tempor aliquip est. Minim non consectetur ipsum aute qui laborum magna anim id. Consequat et tempor voluptate proident. Ad veniam culpa minim ea aliqua cillum nulla velit magna esse. Magna consequat veniam proident anim laboris tempor aliquip est. Minim non consectetur ipsum aute qui laborum magna anim id. Consequat et tempor voluptate proident. Ad veniam culpa minim ea aliqua cillum nulla velit magna esse. Magna consequat veniam proident anim laboris tempor aliquip est.",
      postId: "1",
      image: "images/calendar.png",
    },
  ];

  return (
    <div className="flex flex-col items-center w-screen max-w-screen-md h-auto px-10 m-5 mb-20 ">
      <h1 className="w-full sm:text-center xxs:text-center md:text-left text-2xl font-semibold mb-12">
        Posts
      </h1>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {blog.map((posts) => {
          return <BlogCard value={posts.id} key={posts.id} posts={posts} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
