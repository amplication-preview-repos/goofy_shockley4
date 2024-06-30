import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserAppAccessServiceBase } from "./base/userAppAccess.service.base";

@Injectable()
export class UserAppAccessService extends UserAppAccessServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
