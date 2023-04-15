import { PostService } from './post.service';
import { CreatePostDto, EditPostDto, GetPostDto } from './dto';
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    getPosts(query: GetPostDto): import(".prisma/client").PrismaPromise<import(".prisma/client").Post[]>;
    getPostById(postId: number): import(".prisma/client").Prisma.Prisma__PostClient<import(".prisma/client").Post>;
    getPostBySlug(slug: string): Promise<import(".prisma/client").Post>;
    createPost(dto: CreatePostDto): Promise<import(".prisma/client").Post>;
    editPostById(postId: number, dto: EditPostDto): Promise<import(".prisma/client").Post>;
    deletePostById(postId: number): Promise<void>;
}
