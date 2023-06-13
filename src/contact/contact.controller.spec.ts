import { Test, TestingModule } from '@nestjs/testing';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';

describe('ContactController', () => {
  let controller: ContactController;
  const mockContact = {
    getContacts: jest.fn(dto => {
      return {
        ...dto
      }
    }),
    createContact: jest.fn().mockImplementation((dto) => ({
      ...dto
    })),
    getContactById: jest.fn().mockImplementation((id) => {
      return {
        id: id
      }
    }),
    editContactById: jest.fn().mockImplementation((id, dto) => {
      return {
        id: id,
        ...dto
      }
    }),
    deleteContactById: jest.fn().mockImplementation((id) => {
      return {
        id: id
      }
    }),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactController],
      providers: [ContactService]
    }).overrideProvider(ContactService).useValue(mockContact).compile();

    controller = module.get<ContactController>(ContactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get contacts list', () => {
    const dto = {
      demandType: "SELL",
      processingStatus:"WORKING"
    }
    expect(controller.getContacts({
      demandType: "SELL",
      processingStatus:"WORKING"
    })).toEqual({
      ...dto
    });
    expect(mockContact.getContacts).toHaveBeenCalled();
  })

  it('should get contact by id', () => {
    expect(controller.getContactById(1)).toEqual({
      id: 1
    });
  });

  it('should create contact', () => {
    const dto = {
      fullname: "Andie Chan",
      email: "user@gmail.com",
      phoneNumber: "0946569094",
      demandType: "SELL",
      message: "Call me"
    }
    expect(controller.createContact({
      fullname: "Andie Chan",
      email: "user@gmail.com",
      phoneNumber: "0946569094",
      demandType: "SELL",
      message: "Call me"
    })).toEqual({...dto})
    expect(mockContact.createContact).toHaveBeenCalled();
  });
});
