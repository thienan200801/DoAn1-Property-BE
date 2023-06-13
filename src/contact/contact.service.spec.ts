import { Test, TestingModule } from '@nestjs/testing';
import { ContactService } from './contact.service';
import { GetContactDto } from './dto';

describe('DemoService', () => {
  let service: ContactService;
  const mockContactService = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactService],
    })
    .overrideProvider(ContactService)
    .useValue(mockContactService)
    .compile();

    service = module.get<ContactService>(ContactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
