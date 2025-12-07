
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Program
 * 
 */
export type Program = $Result.DefaultSelection<Prisma.$ProgramPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model JenisEvent
 * 
 */
export type JenisEvent = $Result.DefaultSelection<Prisma.$JenisEventPayload>
/**
 * Model Notulensi
 * 
 */
export type Notulensi = $Result.DefaultSelection<Prisma.$NotulensiPayload>
/**
 * Model Peserta
 * 
 */
export type Peserta = $Result.DefaultSelection<Prisma.$PesertaPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Panitia
 * 
 */
export type Panitia = $Result.DefaultSelection<Prisma.$PanitiaPayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
/**
 * Model Sertifikasi
 * 
 */
export type Sertifikasi = $Result.DefaultSelection<Prisma.$SertifikasiPayload>
/**
 * Model Vendor
 * 
 */
export type Vendor = $Result.DefaultSelection<Prisma.$VendorPayload>
/**
 * Model Asset
 * 
 */
export type Asset = $Result.DefaultSelection<Prisma.$AssetPayload>
/**
 * Model AssetHistory
 * 
 */
export type AssetHistory = $Result.DefaultSelection<Prisma.$AssetHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EmployeeRole: {
  Trainer: 'Trainer',
  Staff: 'Staff',
  Assessor: 'Assessor',
  PJ: 'PJ'
};

export type EmployeeRole = (typeof EmployeeRole)[keyof typeof EmployeeRole]

}

export type EmployeeRole = $Enums.EmployeeRole

export const EmployeeRole: typeof $Enums.EmployeeRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.program`: Exposes CRUD operations for the **Program** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Programs
    * const programs = await prisma.program.findMany()
    * ```
    */
  get program(): Prisma.ProgramDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jenisEvent`: Exposes CRUD operations for the **JenisEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JenisEvents
    * const jenisEvents = await prisma.jenisEvent.findMany()
    * ```
    */
  get jenisEvent(): Prisma.JenisEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notulensi`: Exposes CRUD operations for the **Notulensi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notulensis
    * const notulensis = await prisma.notulensi.findMany()
    * ```
    */
  get notulensi(): Prisma.NotulensiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peserta`: Exposes CRUD operations for the **Peserta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pesertas
    * const pesertas = await prisma.peserta.findMany()
    * ```
    */
  get peserta(): Prisma.PesertaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.panitia`: Exposes CRUD operations for the **Panitia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Panitias
    * const panitias = await prisma.panitia.findMany()
    * ```
    */
  get panitia(): Prisma.PanitiaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sertifikasi`: Exposes CRUD operations for the **Sertifikasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sertifikasis
    * const sertifikasis = await prisma.sertifikasi.findMany()
    * ```
    */
  get sertifikasi(): Prisma.SertifikasiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.VendorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.AssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assetHistory`: Exposes CRUD operations for the **AssetHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssetHistories
    * const assetHistories = await prisma.assetHistory.findMany()
    * ```
    */
  get assetHistory(): Prisma.AssetHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Program: 'Program',
    Event: 'Event',
    JenisEvent: 'JenisEvent',
    Notulensi: 'Notulensi',
    Peserta: 'Peserta',
    Employee: 'Employee',
    Panitia: 'Panitia',
    File: 'File',
    Sertifikasi: 'Sertifikasi',
    Vendor: 'Vendor',
    Asset: 'Asset',
    AssetHistory: 'AssetHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "program" | "event" | "jenisEvent" | "notulensi" | "peserta" | "employee" | "panitia" | "file" | "sertifikasi" | "vendor" | "asset" | "assetHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Program: {
        payload: Prisma.$ProgramPayload<ExtArgs>
        fields: Prisma.ProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findFirst: {
            args: Prisma.ProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findMany: {
            args: Prisma.ProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          create: {
            args: Prisma.ProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          createMany: {
            args: Prisma.ProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          update: {
            args: Prisma.ProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          deleteMany: {
            args: Prisma.ProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          aggregate: {
            args: Prisma.ProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgram>
          }
          groupBy: {
            args: Prisma.ProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      JenisEvent: {
        payload: Prisma.$JenisEventPayload<ExtArgs>
        fields: Prisma.JenisEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JenisEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JenisEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisEventPayload>
          }
          findFirst: {
            args: Prisma.JenisEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JenisEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisEventPayload>
          }
          findMany: {
            args: Prisma.JenisEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisEventPayload>[]
          }
          create: {
            args: Prisma.JenisEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisEventPayload>
          }
          createMany: {
            args: Prisma.JenisEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JenisEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisEventPayload>
          }
          update: {
            args: Prisma.JenisEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisEventPayload>
          }
          deleteMany: {
            args: Prisma.JenisEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JenisEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JenisEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisEventPayload>
          }
          aggregate: {
            args: Prisma.JenisEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJenisEvent>
          }
          groupBy: {
            args: Prisma.JenisEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<JenisEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.JenisEventCountArgs<ExtArgs>
            result: $Utils.Optional<JenisEventCountAggregateOutputType> | number
          }
        }
      }
      Notulensi: {
        payload: Prisma.$NotulensiPayload<ExtArgs>
        fields: Prisma.NotulensiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotulensiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotulensiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotulensiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotulensiPayload>
          }
          findFirst: {
            args: Prisma.NotulensiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotulensiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotulensiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotulensiPayload>
          }
          findMany: {
            args: Prisma.NotulensiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotulensiPayload>[]
          }
          create: {
            args: Prisma.NotulensiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotulensiPayload>
          }
          createMany: {
            args: Prisma.NotulensiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotulensiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotulensiPayload>
          }
          update: {
            args: Prisma.NotulensiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotulensiPayload>
          }
          deleteMany: {
            args: Prisma.NotulensiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotulensiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotulensiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotulensiPayload>
          }
          aggregate: {
            args: Prisma.NotulensiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotulensi>
          }
          groupBy: {
            args: Prisma.NotulensiGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotulensiGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotulensiCountArgs<ExtArgs>
            result: $Utils.Optional<NotulensiCountAggregateOutputType> | number
          }
        }
      }
      Peserta: {
        payload: Prisma.$PesertaPayload<ExtArgs>
        fields: Prisma.PesertaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PesertaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesertaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PesertaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesertaPayload>
          }
          findFirst: {
            args: Prisma.PesertaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesertaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PesertaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesertaPayload>
          }
          findMany: {
            args: Prisma.PesertaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesertaPayload>[]
          }
          create: {
            args: Prisma.PesertaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesertaPayload>
          }
          createMany: {
            args: Prisma.PesertaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PesertaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesertaPayload>
          }
          update: {
            args: Prisma.PesertaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesertaPayload>
          }
          deleteMany: {
            args: Prisma.PesertaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PesertaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PesertaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesertaPayload>
          }
          aggregate: {
            args: Prisma.PesertaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeserta>
          }
          groupBy: {
            args: Prisma.PesertaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PesertaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PesertaCountArgs<ExtArgs>
            result: $Utils.Optional<PesertaCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Panitia: {
        payload: Prisma.$PanitiaPayload<ExtArgs>
        fields: Prisma.PanitiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PanitiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanitiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PanitiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanitiaPayload>
          }
          findFirst: {
            args: Prisma.PanitiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanitiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PanitiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanitiaPayload>
          }
          findMany: {
            args: Prisma.PanitiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanitiaPayload>[]
          }
          create: {
            args: Prisma.PanitiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanitiaPayload>
          }
          createMany: {
            args: Prisma.PanitiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PanitiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanitiaPayload>
          }
          update: {
            args: Prisma.PanitiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanitiaPayload>
          }
          deleteMany: {
            args: Prisma.PanitiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PanitiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PanitiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanitiaPayload>
          }
          aggregate: {
            args: Prisma.PanitiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePanitia>
          }
          groupBy: {
            args: Prisma.PanitiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PanitiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PanitiaCountArgs<ExtArgs>
            result: $Utils.Optional<PanitiaCountAggregateOutputType> | number
          }
        }
      }
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      Sertifikasi: {
        payload: Prisma.$SertifikasiPayload<ExtArgs>
        fields: Prisma.SertifikasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SertifikasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SertifikasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikasiPayload>
          }
          findFirst: {
            args: Prisma.SertifikasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SertifikasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikasiPayload>
          }
          findMany: {
            args: Prisma.SertifikasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikasiPayload>[]
          }
          create: {
            args: Prisma.SertifikasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikasiPayload>
          }
          createMany: {
            args: Prisma.SertifikasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SertifikasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikasiPayload>
          }
          update: {
            args: Prisma.SertifikasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikasiPayload>
          }
          deleteMany: {
            args: Prisma.SertifikasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SertifikasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SertifikasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikasiPayload>
          }
          aggregate: {
            args: Prisma.SertifikasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSertifikasi>
          }
          groupBy: {
            args: Prisma.SertifikasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<SertifikasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.SertifikasiCountArgs<ExtArgs>
            result: $Utils.Optional<SertifikasiCountAggregateOutputType> | number
          }
        }
      }
      Vendor: {
        payload: Prisma.$VendorPayload<ExtArgs>
        fields: Prisma.VendorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findFirst: {
            args: Prisma.VendorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findMany: {
            args: Prisma.VendorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          create: {
            args: Prisma.VendorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          createMany: {
            args: Prisma.VendorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VendorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          update: {
            args: Prisma.VendorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          deleteMany: {
            args: Prisma.VendorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VendorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          aggregate: {
            args: Prisma.VendorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor>
          }
          groupBy: {
            args: Prisma.VendorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorCountArgs<ExtArgs>
            result: $Utils.Optional<VendorCountAggregateOutputType> | number
          }
        }
      }
      Asset: {
        payload: Prisma.$AssetPayload<ExtArgs>
        fields: Prisma.AssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findFirst: {
            args: Prisma.AssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findMany: {
            args: Prisma.AssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          create: {
            args: Prisma.AssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          createMany: {
            args: Prisma.AssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          update: {
            args: Prisma.AssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          deleteMany: {
            args: Prisma.AssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          aggregate: {
            args: Prisma.AssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsset>
          }
          groupBy: {
            args: Prisma.AssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetCountArgs<ExtArgs>
            result: $Utils.Optional<AssetCountAggregateOutputType> | number
          }
        }
      }
      AssetHistory: {
        payload: Prisma.$AssetHistoryPayload<ExtArgs>
        fields: Prisma.AssetHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetHistoryPayload>
          }
          findFirst: {
            args: Prisma.AssetHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetHistoryPayload>
          }
          findMany: {
            args: Prisma.AssetHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetHistoryPayload>[]
          }
          create: {
            args: Prisma.AssetHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetHistoryPayload>
          }
          createMany: {
            args: Prisma.AssetHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AssetHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetHistoryPayload>
          }
          update: {
            args: Prisma.AssetHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetHistoryPayload>
          }
          deleteMany: {
            args: Prisma.AssetHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssetHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetHistoryPayload>
          }
          aggregate: {
            args: Prisma.AssetHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssetHistory>
          }
          groupBy: {
            args: Prisma.AssetHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<AssetHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    program?: ProgramOmit
    event?: EventOmit
    jenisEvent?: JenisEventOmit
    notulensi?: NotulensiOmit
    peserta?: PesertaOmit
    employee?: EmployeeOmit
    panitia?: PanitiaOmit
    file?: FileOmit
    sertifikasi?: SertifikasiOmit
    vendor?: VendorOmit
    asset?: AssetOmit
    assetHistory?: AssetHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProgramCountOutputType
   */

  export type ProgramCountOutputType = {
    Event: number
  }

  export type ProgramCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | ProgramCountOutputTypeCountEventArgs
  }

  // Custom InputTypes
  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramCountOutputType
     */
    select?: ProgramCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    peserta: number
    notulensi: number
    Panitia: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peserta?: boolean | EventCountOutputTypeCountPesertaArgs
    notulensi?: boolean | EventCountOutputTypeCountNotulensiArgs
    Panitia?: boolean | EventCountOutputTypeCountPanitiaArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountPesertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PesertaWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountNotulensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotulensiWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountPanitiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PanitiaWhereInput
  }


  /**
   * Count Type JenisEventCountOutputType
   */

  export type JenisEventCountOutputType = {
    Event: number
  }

  export type JenisEventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | JenisEventCountOutputTypeCountEventArgs
  }

  // Custom InputTypes
  /**
   * JenisEventCountOutputType without action
   */
  export type JenisEventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisEventCountOutputType
     */
    select?: JenisEventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JenisEventCountOutputType without action
   */
  export type JenisEventCountOutputTypeCountEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type NotulensiCountOutputType
   */

  export type NotulensiCountOutputType = {
    File: number
  }

  export type NotulensiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    File?: boolean | NotulensiCountOutputTypeCountFileArgs
  }

  // Custom InputTypes
  /**
   * NotulensiCountOutputType without action
   */
  export type NotulensiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotulensiCountOutputType
     */
    select?: NotulensiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NotulensiCountOutputType without action
   */
  export type NotulensiCountOutputTypeCountFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }


  /**
   * Count Type PesertaCountOutputType
   */

  export type PesertaCountOutputType = {
    sertifikasiTerdaftar: number
    Event: number
  }

  export type PesertaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sertifikasiTerdaftar?: boolean | PesertaCountOutputTypeCountSertifikasiTerdaftarArgs
    Event?: boolean | PesertaCountOutputTypeCountEventArgs
  }

  // Custom InputTypes
  /**
   * PesertaCountOutputType without action
   */
  export type PesertaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesertaCountOutputType
     */
    select?: PesertaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PesertaCountOutputType without action
   */
  export type PesertaCountOutputTypeCountSertifikasiTerdaftarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SertifikasiWhereInput
  }

  /**
   * PesertaCountOutputType without action
   */
  export type PesertaCountOutputTypeCountEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    staff: number
    PIC: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | EmployeeCountOutputTypeCountStaffArgs
    PIC?: boolean | EmployeeCountOutputTypeCountPICArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PanitiaWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountPICArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PanitiaWhereInput
  }


  /**
   * Count Type PanitiaCountOutputType
   */

  export type PanitiaCountOutputType = {
    staff: number
  }

  export type PanitiaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | PanitiaCountOutputTypeCountStaffArgs
  }

  // Custom InputTypes
  /**
   * PanitiaCountOutputType without action
   */
  export type PanitiaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanitiaCountOutputType
     */
    select?: PanitiaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PanitiaCountOutputType without action
   */
  export type PanitiaCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type SertifikasiCountOutputType
   */

  export type SertifikasiCountOutputType = {
    Employee: number
    Peserta: number
  }

  export type SertifikasiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee?: boolean | SertifikasiCountOutputTypeCountEmployeeArgs
    Peserta?: boolean | SertifikasiCountOutputTypeCountPesertaArgs
  }

  // Custom InputTypes
  /**
   * SertifikasiCountOutputType without action
   */
  export type SertifikasiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SertifikasiCountOutputType
     */
    select?: SertifikasiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SertifikasiCountOutputType without action
   */
  export type SertifikasiCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }

  /**
   * SertifikasiCountOutputType without action
   */
  export type SertifikasiCountOutputTypeCountPesertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PesertaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    salt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    salt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    salt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    salt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    salt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    salt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    salt: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    salt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    salt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "salt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      salt: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly salt: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Program
   */

  export type AggregateProgram = {
    _count: ProgramCountAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  export type ProgramMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProgramMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProgramCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ProgramMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProgramMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProgramCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Program to aggregate.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Programs
    **/
    _count?: true | ProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramMaxAggregateInputType
  }

  export type GetProgramAggregateType<T extends ProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgram[P]>
      : GetScalarType<T[P], AggregateProgram[P]>
  }




  export type ProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithAggregationInput | ProgramOrderByWithAggregationInput[]
    by: ProgramScalarFieldEnum[] | ProgramScalarFieldEnum
    having?: ProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramCountAggregateInputType | true
    _min?: ProgramMinAggregateInputType
    _max?: ProgramMaxAggregateInputType
  }

  export type ProgramGroupByOutputType = {
    id: string
    name: string
    description: string | null
    status: string | null
    startDate: Date
    endDate: Date
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ProgramCountAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  type GetProgramGroupByPayload<T extends ProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramGroupByOutputType[P]>
        }
      >
    >


  export type ProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Event?: boolean | Program$EventArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>



  export type ProgramSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ProgramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "status" | "startDate" | "endDate" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["program"]>
  export type ProgramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | Program$EventArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Program"
    objects: {
      Event: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      status: string | null
      startDate: Date
      endDate: Date
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["program"]>
    composites: {}
  }

  type ProgramGetPayload<S extends boolean | null | undefined | ProgramDefaultArgs> = $Result.GetResult<Prisma.$ProgramPayload, S>

  type ProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramCountAggregateInputType | true
    }

  export interface ProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Program'], meta: { name: 'Program' } }
    /**
     * Find zero or one Program that matches the filter.
     * @param {ProgramFindUniqueArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramFindUniqueArgs>(args: SelectSubset<T, ProgramFindUniqueArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Program that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramFindUniqueOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramFindFirstArgs>(args?: SelectSubset<T, ProgramFindFirstArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Programs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programs
     * const programs = await prisma.program.findMany()
     * 
     * // Get first 10 Programs
     * const programs = await prisma.program.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programWithIdOnly = await prisma.program.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramFindManyArgs>(args?: SelectSubset<T, ProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Program.
     * @param {ProgramCreateArgs} args - Arguments to create a Program.
     * @example
     * // Create one Program
     * const Program = await prisma.program.create({
     *   data: {
     *     // ... data to create a Program
     *   }
     * })
     * 
     */
    create<T extends ProgramCreateArgs>(args: SelectSubset<T, ProgramCreateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Programs.
     * @param {ProgramCreateManyArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramCreateManyArgs>(args?: SelectSubset<T, ProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Program.
     * @param {ProgramDeleteArgs} args - Arguments to delete one Program.
     * @example
     * // Delete one Program
     * const Program = await prisma.program.delete({
     *   where: {
     *     // ... filter to delete one Program
     *   }
     * })
     * 
     */
    delete<T extends ProgramDeleteArgs>(args: SelectSubset<T, ProgramDeleteArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Program.
     * @param {ProgramUpdateArgs} args - Arguments to update one Program.
     * @example
     * // Update one Program
     * const program = await prisma.program.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramUpdateArgs>(args: SelectSubset<T, ProgramUpdateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Programs.
     * @param {ProgramDeleteManyArgs} args - Arguments to filter Programs to delete.
     * @example
     * // Delete a few Programs
     * const { count } = await prisma.program.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramDeleteManyArgs>(args?: SelectSubset<T, ProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramUpdateManyArgs>(args: SelectSubset<T, ProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Program.
     * @param {ProgramUpsertArgs} args - Arguments to update or create a Program.
     * @example
     * // Update or create a Program
     * const program = await prisma.program.upsert({
     *   create: {
     *     // ... data to create a Program
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Program we want to update
     *   }
     * })
     */
    upsert<T extends ProgramUpsertArgs>(args: SelectSubset<T, ProgramUpsertArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramCountArgs} args - Arguments to filter Programs to count.
     * @example
     * // Count the number of Programs
     * const count = await prisma.program.count({
     *   where: {
     *     // ... the filter for the Programs we want to count
     *   }
     * })
    **/
    count<T extends ProgramCountArgs>(
      args?: Subset<T, ProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgramAggregateArgs>(args: Subset<T, ProgramAggregateArgs>): Prisma.PrismaPromise<GetProgramAggregateType<T>>

    /**
     * Group by Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramGroupByArgs['orderBy'] }
        : { orderBy?: ProgramGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Program model
   */
  readonly fields: ProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Program.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Event<T extends Program$EventArgs<ExtArgs> = {}>(args?: Subset<T, Program$EventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Program model
   */
  interface ProgramFieldRefs {
    readonly id: FieldRef<"Program", 'String'>
    readonly name: FieldRef<"Program", 'String'>
    readonly description: FieldRef<"Program", 'String'>
    readonly status: FieldRef<"Program", 'String'>
    readonly startDate: FieldRef<"Program", 'DateTime'>
    readonly endDate: FieldRef<"Program", 'DateTime'>
    readonly createdAt: FieldRef<"Program", 'DateTime'>
    readonly updatedAt: FieldRef<"Program", 'DateTime'>
    readonly deletedAt: FieldRef<"Program", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Program findUnique
   */
  export type ProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findUniqueOrThrow
   */
  export type ProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findFirst
   */
  export type ProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findFirstOrThrow
   */
  export type ProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findMany
   */
  export type ProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Programs to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program create
   */
  export type ProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The data needed to create a Program.
     */
    data: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
  }

  /**
   * Program createMany
   */
  export type ProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Program update
   */
  export type ProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The data needed to update a Program.
     */
    data: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
    /**
     * Choose, which Program to update.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program updateMany
   */
  export type ProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to update.
     */
    limit?: number
  }

  /**
   * Program upsert
   */
  export type ProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The filter to search for the Program to update in case it exists.
     */
    where: ProgramWhereUniqueInput
    /**
     * In case the Program found by the `where` argument doesn't exist, create a new Program with this data.
     */
    create: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
    /**
     * In case the Program was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
  }

  /**
   * Program delete
   */
  export type ProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter which Program to delete.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program deleteMany
   */
  export type ProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Programs to delete
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to delete.
     */
    limit?: number
  }

  /**
   * Program.Event
   */
  export type Program$EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Program without action
   */
  export type ProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    harga: number | null
  }

  export type EventSumAggregateOutputType = {
    harga: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    programId: string | null
    jenisEventId: string | null
    notulensiId: string | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    harga: number | null
    tempat: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    programId: string | null
    jenisEventId: string | null
    notulensiId: string | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    harga: number | null
    tempat: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    programId: number
    jenisEventId: number
    notulensiId: number
    name: number
    description: number
    startDate: number
    endDate: number
    harga: number
    tempat: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    harga?: true
  }

  export type EventSumAggregateInputType = {
    harga?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    programId?: true
    jenisEventId?: true
    notulensiId?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    harga?: true
    tempat?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    programId?: true
    jenisEventId?: true
    notulensiId?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    harga?: true
    tempat?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    programId?: true
    jenisEventId?: true
    notulensiId?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    harga?: true
    tempat?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    programId: string
    jenisEventId: string | null
    notulensiId: string | null
    name: string
    description: string | null
    startDate: Date
    endDate: Date
    harga: number | null
    tempat: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    jenisEventId?: boolean
    notulensiId?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    harga?: boolean
    tempat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    peserta?: boolean | Event$pesertaArgs<ExtArgs>
    notulensi?: boolean | Event$notulensiArgs<ExtArgs>
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    JenisEvent?: boolean | Event$JenisEventArgs<ExtArgs>
    Panitia?: boolean | Event$PanitiaArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>



  export type EventSelectScalar = {
    id?: boolean
    programId?: boolean
    jenisEventId?: boolean
    notulensiId?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    harga?: boolean
    tempat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "programId" | "jenisEventId" | "notulensiId" | "name" | "description" | "startDate" | "endDate" | "harga" | "tempat" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peserta?: boolean | Event$pesertaArgs<ExtArgs>
    notulensi?: boolean | Event$notulensiArgs<ExtArgs>
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    JenisEvent?: boolean | Event$JenisEventArgs<ExtArgs>
    Panitia?: boolean | Event$PanitiaArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      peserta: Prisma.$PesertaPayload<ExtArgs>[]
      notulensi: Prisma.$NotulensiPayload<ExtArgs>[]
      program: Prisma.$ProgramPayload<ExtArgs>
      JenisEvent: Prisma.$JenisEventPayload<ExtArgs> | null
      Panitia: Prisma.$PanitiaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      programId: string
      jenisEventId: string | null
      notulensiId: string | null
      name: string
      description: string | null
      startDate: Date
      endDate: Date
      harga: number | null
      tempat: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    peserta<T extends Event$pesertaArgs<ExtArgs> = {}>(args?: Subset<T, Event$pesertaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notulensi<T extends Event$notulensiArgs<ExtArgs> = {}>(args?: Subset<T, Event$notulensiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotulensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    program<T extends ProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramDefaultArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    JenisEvent<T extends Event$JenisEventArgs<ExtArgs> = {}>(args?: Subset<T, Event$JenisEventArgs<ExtArgs>>): Prisma__JenisEventClient<$Result.GetResult<Prisma.$JenisEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Panitia<T extends Event$PanitiaArgs<ExtArgs> = {}>(args?: Subset<T, Event$PanitiaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanitiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly programId: FieldRef<"Event", 'String'>
    readonly jenisEventId: FieldRef<"Event", 'String'>
    readonly notulensiId: FieldRef<"Event", 'String'>
    readonly name: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly startDate: FieldRef<"Event", 'DateTime'>
    readonly endDate: FieldRef<"Event", 'DateTime'>
    readonly harga: FieldRef<"Event", 'Int'>
    readonly tempat: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
    readonly deletedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.peserta
   */
  export type Event$pesertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peserta
     */
    select?: PesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peserta
     */
    omit?: PesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesertaInclude<ExtArgs> | null
    where?: PesertaWhereInput
    orderBy?: PesertaOrderByWithRelationInput | PesertaOrderByWithRelationInput[]
    cursor?: PesertaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PesertaScalarFieldEnum | PesertaScalarFieldEnum[]
  }

  /**
   * Event.notulensi
   */
  export type Event$notulensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notulensi
     */
    select?: NotulensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notulensi
     */
    omit?: NotulensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotulensiInclude<ExtArgs> | null
    where?: NotulensiWhereInput
    orderBy?: NotulensiOrderByWithRelationInput | NotulensiOrderByWithRelationInput[]
    cursor?: NotulensiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotulensiScalarFieldEnum | NotulensiScalarFieldEnum[]
  }

  /**
   * Event.JenisEvent
   */
  export type Event$JenisEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisEvent
     */
    select?: JenisEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisEvent
     */
    omit?: JenisEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisEventInclude<ExtArgs> | null
    where?: JenisEventWhereInput
  }

  /**
   * Event.Panitia
   */
  export type Event$PanitiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panitia
     */
    select?: PanitiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panitia
     */
    omit?: PanitiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanitiaInclude<ExtArgs> | null
    where?: PanitiaWhereInput
    orderBy?: PanitiaOrderByWithRelationInput | PanitiaOrderByWithRelationInput[]
    cursor?: PanitiaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PanitiaScalarFieldEnum | PanitiaScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model JenisEvent
   */

  export type AggregateJenisEvent = {
    _count: JenisEventCountAggregateOutputType | null
    _min: JenisEventMinAggregateOutputType | null
    _max: JenisEventMaxAggregateOutputType | null
  }

  export type JenisEventMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type JenisEventMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type JenisEventCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type JenisEventMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type JenisEventMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type JenisEventCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type JenisEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JenisEvent to aggregate.
     */
    where?: JenisEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisEvents to fetch.
     */
    orderBy?: JenisEventOrderByWithRelationInput | JenisEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JenisEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JenisEvents
    **/
    _count?: true | JenisEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JenisEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JenisEventMaxAggregateInputType
  }

  export type GetJenisEventAggregateType<T extends JenisEventAggregateArgs> = {
        [P in keyof T & keyof AggregateJenisEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJenisEvent[P]>
      : GetScalarType<T[P], AggregateJenisEvent[P]>
  }




  export type JenisEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JenisEventWhereInput
    orderBy?: JenisEventOrderByWithAggregationInput | JenisEventOrderByWithAggregationInput[]
    by: JenisEventScalarFieldEnum[] | JenisEventScalarFieldEnum
    having?: JenisEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JenisEventCountAggregateInputType | true
    _min?: JenisEventMinAggregateInputType
    _max?: JenisEventMaxAggregateInputType
  }

  export type JenisEventGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: JenisEventCountAggregateOutputType | null
    _min: JenisEventMinAggregateOutputType | null
    _max: JenisEventMaxAggregateOutputType | null
  }

  type GetJenisEventGroupByPayload<T extends JenisEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JenisEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JenisEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JenisEventGroupByOutputType[P]>
            : GetScalarType<T[P], JenisEventGroupByOutputType[P]>
        }
      >
    >


  export type JenisEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Event?: boolean | JenisEvent$EventArgs<ExtArgs>
    _count?: boolean | JenisEventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jenisEvent"]>



  export type JenisEventSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type JenisEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["jenisEvent"]>
  export type JenisEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | JenisEvent$EventArgs<ExtArgs>
    _count?: boolean | JenisEventCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $JenisEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JenisEvent"
    objects: {
      Event: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["jenisEvent"]>
    composites: {}
  }

  type JenisEventGetPayload<S extends boolean | null | undefined | JenisEventDefaultArgs> = $Result.GetResult<Prisma.$JenisEventPayload, S>

  type JenisEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JenisEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JenisEventCountAggregateInputType | true
    }

  export interface JenisEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JenisEvent'], meta: { name: 'JenisEvent' } }
    /**
     * Find zero or one JenisEvent that matches the filter.
     * @param {JenisEventFindUniqueArgs} args - Arguments to find a JenisEvent
     * @example
     * // Get one JenisEvent
     * const jenisEvent = await prisma.jenisEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JenisEventFindUniqueArgs>(args: SelectSubset<T, JenisEventFindUniqueArgs<ExtArgs>>): Prisma__JenisEventClient<$Result.GetResult<Prisma.$JenisEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JenisEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JenisEventFindUniqueOrThrowArgs} args - Arguments to find a JenisEvent
     * @example
     * // Get one JenisEvent
     * const jenisEvent = await prisma.jenisEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JenisEventFindUniqueOrThrowArgs>(args: SelectSubset<T, JenisEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JenisEventClient<$Result.GetResult<Prisma.$JenisEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JenisEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisEventFindFirstArgs} args - Arguments to find a JenisEvent
     * @example
     * // Get one JenisEvent
     * const jenisEvent = await prisma.jenisEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JenisEventFindFirstArgs>(args?: SelectSubset<T, JenisEventFindFirstArgs<ExtArgs>>): Prisma__JenisEventClient<$Result.GetResult<Prisma.$JenisEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JenisEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisEventFindFirstOrThrowArgs} args - Arguments to find a JenisEvent
     * @example
     * // Get one JenisEvent
     * const jenisEvent = await prisma.jenisEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JenisEventFindFirstOrThrowArgs>(args?: SelectSubset<T, JenisEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__JenisEventClient<$Result.GetResult<Prisma.$JenisEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JenisEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JenisEvents
     * const jenisEvents = await prisma.jenisEvent.findMany()
     * 
     * // Get first 10 JenisEvents
     * const jenisEvents = await prisma.jenisEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jenisEventWithIdOnly = await prisma.jenisEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JenisEventFindManyArgs>(args?: SelectSubset<T, JenisEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenisEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JenisEvent.
     * @param {JenisEventCreateArgs} args - Arguments to create a JenisEvent.
     * @example
     * // Create one JenisEvent
     * const JenisEvent = await prisma.jenisEvent.create({
     *   data: {
     *     // ... data to create a JenisEvent
     *   }
     * })
     * 
     */
    create<T extends JenisEventCreateArgs>(args: SelectSubset<T, JenisEventCreateArgs<ExtArgs>>): Prisma__JenisEventClient<$Result.GetResult<Prisma.$JenisEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JenisEvents.
     * @param {JenisEventCreateManyArgs} args - Arguments to create many JenisEvents.
     * @example
     * // Create many JenisEvents
     * const jenisEvent = await prisma.jenisEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JenisEventCreateManyArgs>(args?: SelectSubset<T, JenisEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JenisEvent.
     * @param {JenisEventDeleteArgs} args - Arguments to delete one JenisEvent.
     * @example
     * // Delete one JenisEvent
     * const JenisEvent = await prisma.jenisEvent.delete({
     *   where: {
     *     // ... filter to delete one JenisEvent
     *   }
     * })
     * 
     */
    delete<T extends JenisEventDeleteArgs>(args: SelectSubset<T, JenisEventDeleteArgs<ExtArgs>>): Prisma__JenisEventClient<$Result.GetResult<Prisma.$JenisEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JenisEvent.
     * @param {JenisEventUpdateArgs} args - Arguments to update one JenisEvent.
     * @example
     * // Update one JenisEvent
     * const jenisEvent = await prisma.jenisEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JenisEventUpdateArgs>(args: SelectSubset<T, JenisEventUpdateArgs<ExtArgs>>): Prisma__JenisEventClient<$Result.GetResult<Prisma.$JenisEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JenisEvents.
     * @param {JenisEventDeleteManyArgs} args - Arguments to filter JenisEvents to delete.
     * @example
     * // Delete a few JenisEvents
     * const { count } = await prisma.jenisEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JenisEventDeleteManyArgs>(args?: SelectSubset<T, JenisEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JenisEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JenisEvents
     * const jenisEvent = await prisma.jenisEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JenisEventUpdateManyArgs>(args: SelectSubset<T, JenisEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JenisEvent.
     * @param {JenisEventUpsertArgs} args - Arguments to update or create a JenisEvent.
     * @example
     * // Update or create a JenisEvent
     * const jenisEvent = await prisma.jenisEvent.upsert({
     *   create: {
     *     // ... data to create a JenisEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JenisEvent we want to update
     *   }
     * })
     */
    upsert<T extends JenisEventUpsertArgs>(args: SelectSubset<T, JenisEventUpsertArgs<ExtArgs>>): Prisma__JenisEventClient<$Result.GetResult<Prisma.$JenisEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JenisEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisEventCountArgs} args - Arguments to filter JenisEvents to count.
     * @example
     * // Count the number of JenisEvents
     * const count = await prisma.jenisEvent.count({
     *   where: {
     *     // ... the filter for the JenisEvents we want to count
     *   }
     * })
    **/
    count<T extends JenisEventCountArgs>(
      args?: Subset<T, JenisEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JenisEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JenisEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JenisEventAggregateArgs>(args: Subset<T, JenisEventAggregateArgs>): Prisma.PrismaPromise<GetJenisEventAggregateType<T>>

    /**
     * Group by JenisEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JenisEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JenisEventGroupByArgs['orderBy'] }
        : { orderBy?: JenisEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JenisEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJenisEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JenisEvent model
   */
  readonly fields: JenisEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JenisEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JenisEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Event<T extends JenisEvent$EventArgs<ExtArgs> = {}>(args?: Subset<T, JenisEvent$EventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JenisEvent model
   */
  interface JenisEventFieldRefs {
    readonly id: FieldRef<"JenisEvent", 'String'>
    readonly name: FieldRef<"JenisEvent", 'String'>
    readonly createdAt: FieldRef<"JenisEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"JenisEvent", 'DateTime'>
    readonly deletedAt: FieldRef<"JenisEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JenisEvent findUnique
   */
  export type JenisEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisEvent
     */
    select?: JenisEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisEvent
     */
    omit?: JenisEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisEventInclude<ExtArgs> | null
    /**
     * Filter, which JenisEvent to fetch.
     */
    where: JenisEventWhereUniqueInput
  }

  /**
   * JenisEvent findUniqueOrThrow
   */
  export type JenisEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisEvent
     */
    select?: JenisEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisEvent
     */
    omit?: JenisEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisEventInclude<ExtArgs> | null
    /**
     * Filter, which JenisEvent to fetch.
     */
    where: JenisEventWhereUniqueInput
  }

  /**
   * JenisEvent findFirst
   */
  export type JenisEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisEvent
     */
    select?: JenisEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisEvent
     */
    omit?: JenisEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisEventInclude<ExtArgs> | null
    /**
     * Filter, which JenisEvent to fetch.
     */
    where?: JenisEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisEvents to fetch.
     */
    orderBy?: JenisEventOrderByWithRelationInput | JenisEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JenisEvents.
     */
    cursor?: JenisEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JenisEvents.
     */
    distinct?: JenisEventScalarFieldEnum | JenisEventScalarFieldEnum[]
  }

  /**
   * JenisEvent findFirstOrThrow
   */
  export type JenisEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisEvent
     */
    select?: JenisEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisEvent
     */
    omit?: JenisEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisEventInclude<ExtArgs> | null
    /**
     * Filter, which JenisEvent to fetch.
     */
    where?: JenisEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisEvents to fetch.
     */
    orderBy?: JenisEventOrderByWithRelationInput | JenisEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JenisEvents.
     */
    cursor?: JenisEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JenisEvents.
     */
    distinct?: JenisEventScalarFieldEnum | JenisEventScalarFieldEnum[]
  }

  /**
   * JenisEvent findMany
   */
  export type JenisEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisEvent
     */
    select?: JenisEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisEvent
     */
    omit?: JenisEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisEventInclude<ExtArgs> | null
    /**
     * Filter, which JenisEvents to fetch.
     */
    where?: JenisEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisEvents to fetch.
     */
    orderBy?: JenisEventOrderByWithRelationInput | JenisEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JenisEvents.
     */
    cursor?: JenisEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisEvents.
     */
    skip?: number
    distinct?: JenisEventScalarFieldEnum | JenisEventScalarFieldEnum[]
  }

  /**
   * JenisEvent create
   */
  export type JenisEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisEvent
     */
    select?: JenisEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisEvent
     */
    omit?: JenisEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisEventInclude<ExtArgs> | null
    /**
     * The data needed to create a JenisEvent.
     */
    data: XOR<JenisEventCreateInput, JenisEventUncheckedCreateInput>
  }

  /**
   * JenisEvent createMany
   */
  export type JenisEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JenisEvents.
     */
    data: JenisEventCreateManyInput | JenisEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JenisEvent update
   */
  export type JenisEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisEvent
     */
    select?: JenisEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisEvent
     */
    omit?: JenisEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisEventInclude<ExtArgs> | null
    /**
     * The data needed to update a JenisEvent.
     */
    data: XOR<JenisEventUpdateInput, JenisEventUncheckedUpdateInput>
    /**
     * Choose, which JenisEvent to update.
     */
    where: JenisEventWhereUniqueInput
  }

  /**
   * JenisEvent updateMany
   */
  export type JenisEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JenisEvents.
     */
    data: XOR<JenisEventUpdateManyMutationInput, JenisEventUncheckedUpdateManyInput>
    /**
     * Filter which JenisEvents to update
     */
    where?: JenisEventWhereInput
    /**
     * Limit how many JenisEvents to update.
     */
    limit?: number
  }

  /**
   * JenisEvent upsert
   */
  export type JenisEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisEvent
     */
    select?: JenisEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisEvent
     */
    omit?: JenisEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisEventInclude<ExtArgs> | null
    /**
     * The filter to search for the JenisEvent to update in case it exists.
     */
    where: JenisEventWhereUniqueInput
    /**
     * In case the JenisEvent found by the `where` argument doesn't exist, create a new JenisEvent with this data.
     */
    create: XOR<JenisEventCreateInput, JenisEventUncheckedCreateInput>
    /**
     * In case the JenisEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JenisEventUpdateInput, JenisEventUncheckedUpdateInput>
  }

  /**
   * JenisEvent delete
   */
  export type JenisEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisEvent
     */
    select?: JenisEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisEvent
     */
    omit?: JenisEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisEventInclude<ExtArgs> | null
    /**
     * Filter which JenisEvent to delete.
     */
    where: JenisEventWhereUniqueInput
  }

  /**
   * JenisEvent deleteMany
   */
  export type JenisEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JenisEvents to delete
     */
    where?: JenisEventWhereInput
    /**
     * Limit how many JenisEvents to delete.
     */
    limit?: number
  }

  /**
   * JenisEvent.Event
   */
  export type JenisEvent$EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * JenisEvent without action
   */
  export type JenisEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisEvent
     */
    select?: JenisEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JenisEvent
     */
    omit?: JenisEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisEventInclude<ExtArgs> | null
  }


  /**
   * Model Notulensi
   */

  export type AggregateNotulensi = {
    _count: NotulensiCountAggregateOutputType | null
    _min: NotulensiMinAggregateOutputType | null
    _max: NotulensiMaxAggregateOutputType | null
  }

  export type NotulensiMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    name: string | null
    tanggal: Date | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type NotulensiMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    name: string | null
    tanggal: Date | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type NotulensiCountAggregateOutputType = {
    id: number
    eventId: number
    name: number
    tanggal: number
    description: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type NotulensiMinAggregateInputType = {
    id?: true
    eventId?: true
    name?: true
    tanggal?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type NotulensiMaxAggregateInputType = {
    id?: true
    eventId?: true
    name?: true
    tanggal?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type NotulensiCountAggregateInputType = {
    id?: true
    eventId?: true
    name?: true
    tanggal?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type NotulensiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notulensi to aggregate.
     */
    where?: NotulensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notulensis to fetch.
     */
    orderBy?: NotulensiOrderByWithRelationInput | NotulensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotulensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notulensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notulensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notulensis
    **/
    _count?: true | NotulensiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotulensiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotulensiMaxAggregateInputType
  }

  export type GetNotulensiAggregateType<T extends NotulensiAggregateArgs> = {
        [P in keyof T & keyof AggregateNotulensi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotulensi[P]>
      : GetScalarType<T[P], AggregateNotulensi[P]>
  }




  export type NotulensiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotulensiWhereInput
    orderBy?: NotulensiOrderByWithAggregationInput | NotulensiOrderByWithAggregationInput[]
    by: NotulensiScalarFieldEnum[] | NotulensiScalarFieldEnum
    having?: NotulensiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotulensiCountAggregateInputType | true
    _min?: NotulensiMinAggregateInputType
    _max?: NotulensiMaxAggregateInputType
  }

  export type NotulensiGroupByOutputType = {
    id: string
    eventId: string
    name: string
    tanggal: Date
    description: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: NotulensiCountAggregateOutputType | null
    _min: NotulensiMinAggregateOutputType | null
    _max: NotulensiMaxAggregateOutputType | null
  }

  type GetNotulensiGroupByPayload<T extends NotulensiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotulensiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotulensiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotulensiGroupByOutputType[P]>
            : GetScalarType<T[P], NotulensiGroupByOutputType[P]>
        }
      >
    >


  export type NotulensiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    name?: boolean
    tanggal?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    File?: boolean | Notulensi$FileArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
    _count?: boolean | NotulensiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notulensi"]>



  export type NotulensiSelectScalar = {
    id?: boolean
    eventId?: boolean
    name?: boolean
    tanggal?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type NotulensiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "name" | "tanggal" | "description" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["notulensi"]>
  export type NotulensiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    File?: boolean | Notulensi$FileArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
    _count?: boolean | NotulensiCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $NotulensiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notulensi"
    objects: {
      File: Prisma.$FilePayload<ExtArgs>[]
      Event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      name: string
      tanggal: Date
      description: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["notulensi"]>
    composites: {}
  }

  type NotulensiGetPayload<S extends boolean | null | undefined | NotulensiDefaultArgs> = $Result.GetResult<Prisma.$NotulensiPayload, S>

  type NotulensiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotulensiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotulensiCountAggregateInputType | true
    }

  export interface NotulensiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notulensi'], meta: { name: 'Notulensi' } }
    /**
     * Find zero or one Notulensi that matches the filter.
     * @param {NotulensiFindUniqueArgs} args - Arguments to find a Notulensi
     * @example
     * // Get one Notulensi
     * const notulensi = await prisma.notulensi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotulensiFindUniqueArgs>(args: SelectSubset<T, NotulensiFindUniqueArgs<ExtArgs>>): Prisma__NotulensiClient<$Result.GetResult<Prisma.$NotulensiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notulensi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotulensiFindUniqueOrThrowArgs} args - Arguments to find a Notulensi
     * @example
     * // Get one Notulensi
     * const notulensi = await prisma.notulensi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotulensiFindUniqueOrThrowArgs>(args: SelectSubset<T, NotulensiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotulensiClient<$Result.GetResult<Prisma.$NotulensiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notulensi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotulensiFindFirstArgs} args - Arguments to find a Notulensi
     * @example
     * // Get one Notulensi
     * const notulensi = await prisma.notulensi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotulensiFindFirstArgs>(args?: SelectSubset<T, NotulensiFindFirstArgs<ExtArgs>>): Prisma__NotulensiClient<$Result.GetResult<Prisma.$NotulensiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notulensi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotulensiFindFirstOrThrowArgs} args - Arguments to find a Notulensi
     * @example
     * // Get one Notulensi
     * const notulensi = await prisma.notulensi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotulensiFindFirstOrThrowArgs>(args?: SelectSubset<T, NotulensiFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotulensiClient<$Result.GetResult<Prisma.$NotulensiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notulensis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotulensiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notulensis
     * const notulensis = await prisma.notulensi.findMany()
     * 
     * // Get first 10 Notulensis
     * const notulensis = await prisma.notulensi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notulensiWithIdOnly = await prisma.notulensi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotulensiFindManyArgs>(args?: SelectSubset<T, NotulensiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotulensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notulensi.
     * @param {NotulensiCreateArgs} args - Arguments to create a Notulensi.
     * @example
     * // Create one Notulensi
     * const Notulensi = await prisma.notulensi.create({
     *   data: {
     *     // ... data to create a Notulensi
     *   }
     * })
     * 
     */
    create<T extends NotulensiCreateArgs>(args: SelectSubset<T, NotulensiCreateArgs<ExtArgs>>): Prisma__NotulensiClient<$Result.GetResult<Prisma.$NotulensiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notulensis.
     * @param {NotulensiCreateManyArgs} args - Arguments to create many Notulensis.
     * @example
     * // Create many Notulensis
     * const notulensi = await prisma.notulensi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotulensiCreateManyArgs>(args?: SelectSubset<T, NotulensiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notulensi.
     * @param {NotulensiDeleteArgs} args - Arguments to delete one Notulensi.
     * @example
     * // Delete one Notulensi
     * const Notulensi = await prisma.notulensi.delete({
     *   where: {
     *     // ... filter to delete one Notulensi
     *   }
     * })
     * 
     */
    delete<T extends NotulensiDeleteArgs>(args: SelectSubset<T, NotulensiDeleteArgs<ExtArgs>>): Prisma__NotulensiClient<$Result.GetResult<Prisma.$NotulensiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notulensi.
     * @param {NotulensiUpdateArgs} args - Arguments to update one Notulensi.
     * @example
     * // Update one Notulensi
     * const notulensi = await prisma.notulensi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotulensiUpdateArgs>(args: SelectSubset<T, NotulensiUpdateArgs<ExtArgs>>): Prisma__NotulensiClient<$Result.GetResult<Prisma.$NotulensiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notulensis.
     * @param {NotulensiDeleteManyArgs} args - Arguments to filter Notulensis to delete.
     * @example
     * // Delete a few Notulensis
     * const { count } = await prisma.notulensi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotulensiDeleteManyArgs>(args?: SelectSubset<T, NotulensiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notulensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotulensiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notulensis
     * const notulensi = await prisma.notulensi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotulensiUpdateManyArgs>(args: SelectSubset<T, NotulensiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notulensi.
     * @param {NotulensiUpsertArgs} args - Arguments to update or create a Notulensi.
     * @example
     * // Update or create a Notulensi
     * const notulensi = await prisma.notulensi.upsert({
     *   create: {
     *     // ... data to create a Notulensi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notulensi we want to update
     *   }
     * })
     */
    upsert<T extends NotulensiUpsertArgs>(args: SelectSubset<T, NotulensiUpsertArgs<ExtArgs>>): Prisma__NotulensiClient<$Result.GetResult<Prisma.$NotulensiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notulensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotulensiCountArgs} args - Arguments to filter Notulensis to count.
     * @example
     * // Count the number of Notulensis
     * const count = await prisma.notulensi.count({
     *   where: {
     *     // ... the filter for the Notulensis we want to count
     *   }
     * })
    **/
    count<T extends NotulensiCountArgs>(
      args?: Subset<T, NotulensiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotulensiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notulensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotulensiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotulensiAggregateArgs>(args: Subset<T, NotulensiAggregateArgs>): Prisma.PrismaPromise<GetNotulensiAggregateType<T>>

    /**
     * Group by Notulensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotulensiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotulensiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotulensiGroupByArgs['orderBy'] }
        : { orderBy?: NotulensiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotulensiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotulensiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notulensi model
   */
  readonly fields: NotulensiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notulensi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotulensiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    File<T extends Notulensi$FileArgs<ExtArgs> = {}>(args?: Subset<T, Notulensi$FileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notulensi model
   */
  interface NotulensiFieldRefs {
    readonly id: FieldRef<"Notulensi", 'String'>
    readonly eventId: FieldRef<"Notulensi", 'String'>
    readonly name: FieldRef<"Notulensi", 'String'>
    readonly tanggal: FieldRef<"Notulensi", 'DateTime'>
    readonly description: FieldRef<"Notulensi", 'String'>
    readonly createdAt: FieldRef<"Notulensi", 'DateTime'>
    readonly updatedAt: FieldRef<"Notulensi", 'DateTime'>
    readonly deletedAt: FieldRef<"Notulensi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notulensi findUnique
   */
  export type NotulensiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notulensi
     */
    select?: NotulensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notulensi
     */
    omit?: NotulensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotulensiInclude<ExtArgs> | null
    /**
     * Filter, which Notulensi to fetch.
     */
    where: NotulensiWhereUniqueInput
  }

  /**
   * Notulensi findUniqueOrThrow
   */
  export type NotulensiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notulensi
     */
    select?: NotulensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notulensi
     */
    omit?: NotulensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotulensiInclude<ExtArgs> | null
    /**
     * Filter, which Notulensi to fetch.
     */
    where: NotulensiWhereUniqueInput
  }

  /**
   * Notulensi findFirst
   */
  export type NotulensiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notulensi
     */
    select?: NotulensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notulensi
     */
    omit?: NotulensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotulensiInclude<ExtArgs> | null
    /**
     * Filter, which Notulensi to fetch.
     */
    where?: NotulensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notulensis to fetch.
     */
    orderBy?: NotulensiOrderByWithRelationInput | NotulensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notulensis.
     */
    cursor?: NotulensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notulensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notulensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notulensis.
     */
    distinct?: NotulensiScalarFieldEnum | NotulensiScalarFieldEnum[]
  }

  /**
   * Notulensi findFirstOrThrow
   */
  export type NotulensiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notulensi
     */
    select?: NotulensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notulensi
     */
    omit?: NotulensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotulensiInclude<ExtArgs> | null
    /**
     * Filter, which Notulensi to fetch.
     */
    where?: NotulensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notulensis to fetch.
     */
    orderBy?: NotulensiOrderByWithRelationInput | NotulensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notulensis.
     */
    cursor?: NotulensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notulensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notulensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notulensis.
     */
    distinct?: NotulensiScalarFieldEnum | NotulensiScalarFieldEnum[]
  }

  /**
   * Notulensi findMany
   */
  export type NotulensiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notulensi
     */
    select?: NotulensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notulensi
     */
    omit?: NotulensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotulensiInclude<ExtArgs> | null
    /**
     * Filter, which Notulensis to fetch.
     */
    where?: NotulensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notulensis to fetch.
     */
    orderBy?: NotulensiOrderByWithRelationInput | NotulensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notulensis.
     */
    cursor?: NotulensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notulensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notulensis.
     */
    skip?: number
    distinct?: NotulensiScalarFieldEnum | NotulensiScalarFieldEnum[]
  }

  /**
   * Notulensi create
   */
  export type NotulensiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notulensi
     */
    select?: NotulensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notulensi
     */
    omit?: NotulensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotulensiInclude<ExtArgs> | null
    /**
     * The data needed to create a Notulensi.
     */
    data: XOR<NotulensiCreateInput, NotulensiUncheckedCreateInput>
  }

  /**
   * Notulensi createMany
   */
  export type NotulensiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notulensis.
     */
    data: NotulensiCreateManyInput | NotulensiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notulensi update
   */
  export type NotulensiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notulensi
     */
    select?: NotulensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notulensi
     */
    omit?: NotulensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotulensiInclude<ExtArgs> | null
    /**
     * The data needed to update a Notulensi.
     */
    data: XOR<NotulensiUpdateInput, NotulensiUncheckedUpdateInput>
    /**
     * Choose, which Notulensi to update.
     */
    where: NotulensiWhereUniqueInput
  }

  /**
   * Notulensi updateMany
   */
  export type NotulensiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notulensis.
     */
    data: XOR<NotulensiUpdateManyMutationInput, NotulensiUncheckedUpdateManyInput>
    /**
     * Filter which Notulensis to update
     */
    where?: NotulensiWhereInput
    /**
     * Limit how many Notulensis to update.
     */
    limit?: number
  }

  /**
   * Notulensi upsert
   */
  export type NotulensiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notulensi
     */
    select?: NotulensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notulensi
     */
    omit?: NotulensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotulensiInclude<ExtArgs> | null
    /**
     * The filter to search for the Notulensi to update in case it exists.
     */
    where: NotulensiWhereUniqueInput
    /**
     * In case the Notulensi found by the `where` argument doesn't exist, create a new Notulensi with this data.
     */
    create: XOR<NotulensiCreateInput, NotulensiUncheckedCreateInput>
    /**
     * In case the Notulensi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotulensiUpdateInput, NotulensiUncheckedUpdateInput>
  }

  /**
   * Notulensi delete
   */
  export type NotulensiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notulensi
     */
    select?: NotulensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notulensi
     */
    omit?: NotulensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotulensiInclude<ExtArgs> | null
    /**
     * Filter which Notulensi to delete.
     */
    where: NotulensiWhereUniqueInput
  }

  /**
   * Notulensi deleteMany
   */
  export type NotulensiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notulensis to delete
     */
    where?: NotulensiWhereInput
    /**
     * Limit how many Notulensis to delete.
     */
    limit?: number
  }

  /**
   * Notulensi.File
   */
  export type Notulensi$FileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * Notulensi without action
   */
  export type NotulensiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notulensi
     */
    select?: NotulensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notulensi
     */
    omit?: NotulensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotulensiInclude<ExtArgs> | null
  }


  /**
   * Model Peserta
   */

  export type AggregatePeserta = {
    _count: PesertaCountAggregateOutputType | null
    _avg: PesertaAvgAggregateOutputType | null
    _sum: PesertaSumAggregateOutputType | null
    _min: PesertaMinAggregateOutputType | null
    _max: PesertaMaxAggregateOutputType | null
  }

  export type PesertaAvgAggregateOutputType = {
    balance: number | null
  }

  export type PesertaSumAggregateOutputType = {
    balance: number | null
  }

  export type PesertaMinAggregateOutputType = {
    id: string | null
    provider: string | null
    providerId: string | null
    nim: string | null
    name: string | null
    email: string | null
    phone: string | null
    status: string | null
    balance: number | null
    picture: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PesertaMaxAggregateOutputType = {
    id: string | null
    provider: string | null
    providerId: string | null
    nim: string | null
    name: string | null
    email: string | null
    phone: string | null
    status: string | null
    balance: number | null
    picture: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PesertaCountAggregateOutputType = {
    id: number
    provider: number
    providerId: number
    nim: number
    name: number
    email: number
    phone: number
    status: number
    balance: number
    picture: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type PesertaAvgAggregateInputType = {
    balance?: true
  }

  export type PesertaSumAggregateInputType = {
    balance?: true
  }

  export type PesertaMinAggregateInputType = {
    id?: true
    provider?: true
    providerId?: true
    nim?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    balance?: true
    picture?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PesertaMaxAggregateInputType = {
    id?: true
    provider?: true
    providerId?: true
    nim?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    balance?: true
    picture?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PesertaCountAggregateInputType = {
    id?: true
    provider?: true
    providerId?: true
    nim?: true
    name?: true
    email?: true
    phone?: true
    status?: true
    balance?: true
    picture?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PesertaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peserta to aggregate.
     */
    where?: PesertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesertas to fetch.
     */
    orderBy?: PesertaOrderByWithRelationInput | PesertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PesertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pesertas
    **/
    _count?: true | PesertaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PesertaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PesertaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PesertaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PesertaMaxAggregateInputType
  }

  export type GetPesertaAggregateType<T extends PesertaAggregateArgs> = {
        [P in keyof T & keyof AggregatePeserta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeserta[P]>
      : GetScalarType<T[P], AggregatePeserta[P]>
  }




  export type PesertaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PesertaWhereInput
    orderBy?: PesertaOrderByWithAggregationInput | PesertaOrderByWithAggregationInput[]
    by: PesertaScalarFieldEnum[] | PesertaScalarFieldEnum
    having?: PesertaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PesertaCountAggregateInputType | true
    _avg?: PesertaAvgAggregateInputType
    _sum?: PesertaSumAggregateInputType
    _min?: PesertaMinAggregateInputType
    _max?: PesertaMaxAggregateInputType
  }

  export type PesertaGroupByOutputType = {
    id: string
    provider: string
    providerId: string | null
    nim: string | null
    name: string
    email: string
    phone: string | null
    status: string | null
    balance: number | null
    picture: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: PesertaCountAggregateOutputType | null
    _avg: PesertaAvgAggregateOutputType | null
    _sum: PesertaSumAggregateOutputType | null
    _min: PesertaMinAggregateOutputType | null
    _max: PesertaMaxAggregateOutputType | null
  }

  type GetPesertaGroupByPayload<T extends PesertaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PesertaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PesertaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PesertaGroupByOutputType[P]>
            : GetScalarType<T[P], PesertaGroupByOutputType[P]>
        }
      >
    >


  export type PesertaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerId?: boolean
    nim?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    balance?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    sertifikat?: boolean | Peserta$sertifikatArgs<ExtArgs>
    sertifikasiTerdaftar?: boolean | Peserta$sertifikasiTerdaftarArgs<ExtArgs>
    Event?: boolean | Peserta$EventArgs<ExtArgs>
    _count?: boolean | PesertaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peserta"]>



  export type PesertaSelectScalar = {
    id?: boolean
    provider?: boolean
    providerId?: boolean
    nim?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    balance?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type PesertaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "providerId" | "nim" | "name" | "email" | "phone" | "status" | "balance" | "picture" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["peserta"]>
  export type PesertaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sertifikat?: boolean | Peserta$sertifikatArgs<ExtArgs>
    sertifikasiTerdaftar?: boolean | Peserta$sertifikasiTerdaftarArgs<ExtArgs>
    Event?: boolean | Peserta$EventArgs<ExtArgs>
    _count?: boolean | PesertaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PesertaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Peserta"
    objects: {
      sertifikat: Prisma.$FilePayload<ExtArgs> | null
      sertifikasiTerdaftar: Prisma.$SertifikasiPayload<ExtArgs>[]
      Event: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: string
      providerId: string | null
      nim: string | null
      name: string
      email: string
      phone: string | null
      status: string | null
      balance: number | null
      picture: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["peserta"]>
    composites: {}
  }

  type PesertaGetPayload<S extends boolean | null | undefined | PesertaDefaultArgs> = $Result.GetResult<Prisma.$PesertaPayload, S>

  type PesertaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PesertaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PesertaCountAggregateInputType | true
    }

  export interface PesertaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Peserta'], meta: { name: 'Peserta' } }
    /**
     * Find zero or one Peserta that matches the filter.
     * @param {PesertaFindUniqueArgs} args - Arguments to find a Peserta
     * @example
     * // Get one Peserta
     * const peserta = await prisma.peserta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PesertaFindUniqueArgs>(args: SelectSubset<T, PesertaFindUniqueArgs<ExtArgs>>): Prisma__PesertaClient<$Result.GetResult<Prisma.$PesertaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Peserta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PesertaFindUniqueOrThrowArgs} args - Arguments to find a Peserta
     * @example
     * // Get one Peserta
     * const peserta = await prisma.peserta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PesertaFindUniqueOrThrowArgs>(args: SelectSubset<T, PesertaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PesertaClient<$Result.GetResult<Prisma.$PesertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peserta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesertaFindFirstArgs} args - Arguments to find a Peserta
     * @example
     * // Get one Peserta
     * const peserta = await prisma.peserta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PesertaFindFirstArgs>(args?: SelectSubset<T, PesertaFindFirstArgs<ExtArgs>>): Prisma__PesertaClient<$Result.GetResult<Prisma.$PesertaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peserta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesertaFindFirstOrThrowArgs} args - Arguments to find a Peserta
     * @example
     * // Get one Peserta
     * const peserta = await prisma.peserta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PesertaFindFirstOrThrowArgs>(args?: SelectSubset<T, PesertaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PesertaClient<$Result.GetResult<Prisma.$PesertaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pesertas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesertaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pesertas
     * const pesertas = await prisma.peserta.findMany()
     * 
     * // Get first 10 Pesertas
     * const pesertas = await prisma.peserta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pesertaWithIdOnly = await prisma.peserta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PesertaFindManyArgs>(args?: SelectSubset<T, PesertaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Peserta.
     * @param {PesertaCreateArgs} args - Arguments to create a Peserta.
     * @example
     * // Create one Peserta
     * const Peserta = await prisma.peserta.create({
     *   data: {
     *     // ... data to create a Peserta
     *   }
     * })
     * 
     */
    create<T extends PesertaCreateArgs>(args: SelectSubset<T, PesertaCreateArgs<ExtArgs>>): Prisma__PesertaClient<$Result.GetResult<Prisma.$PesertaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pesertas.
     * @param {PesertaCreateManyArgs} args - Arguments to create many Pesertas.
     * @example
     * // Create many Pesertas
     * const peserta = await prisma.peserta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PesertaCreateManyArgs>(args?: SelectSubset<T, PesertaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Peserta.
     * @param {PesertaDeleteArgs} args - Arguments to delete one Peserta.
     * @example
     * // Delete one Peserta
     * const Peserta = await prisma.peserta.delete({
     *   where: {
     *     // ... filter to delete one Peserta
     *   }
     * })
     * 
     */
    delete<T extends PesertaDeleteArgs>(args: SelectSubset<T, PesertaDeleteArgs<ExtArgs>>): Prisma__PesertaClient<$Result.GetResult<Prisma.$PesertaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Peserta.
     * @param {PesertaUpdateArgs} args - Arguments to update one Peserta.
     * @example
     * // Update one Peserta
     * const peserta = await prisma.peserta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PesertaUpdateArgs>(args: SelectSubset<T, PesertaUpdateArgs<ExtArgs>>): Prisma__PesertaClient<$Result.GetResult<Prisma.$PesertaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pesertas.
     * @param {PesertaDeleteManyArgs} args - Arguments to filter Pesertas to delete.
     * @example
     * // Delete a few Pesertas
     * const { count } = await prisma.peserta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PesertaDeleteManyArgs>(args?: SelectSubset<T, PesertaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pesertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesertaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pesertas
     * const peserta = await prisma.peserta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PesertaUpdateManyArgs>(args: SelectSubset<T, PesertaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Peserta.
     * @param {PesertaUpsertArgs} args - Arguments to update or create a Peserta.
     * @example
     * // Update or create a Peserta
     * const peserta = await prisma.peserta.upsert({
     *   create: {
     *     // ... data to create a Peserta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peserta we want to update
     *   }
     * })
     */
    upsert<T extends PesertaUpsertArgs>(args: SelectSubset<T, PesertaUpsertArgs<ExtArgs>>): Prisma__PesertaClient<$Result.GetResult<Prisma.$PesertaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pesertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesertaCountArgs} args - Arguments to filter Pesertas to count.
     * @example
     * // Count the number of Pesertas
     * const count = await prisma.peserta.count({
     *   where: {
     *     // ... the filter for the Pesertas we want to count
     *   }
     * })
    **/
    count<T extends PesertaCountArgs>(
      args?: Subset<T, PesertaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PesertaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peserta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesertaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PesertaAggregateArgs>(args: Subset<T, PesertaAggregateArgs>): Prisma.PrismaPromise<GetPesertaAggregateType<T>>

    /**
     * Group by Peserta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesertaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PesertaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PesertaGroupByArgs['orderBy'] }
        : { orderBy?: PesertaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PesertaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPesertaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Peserta model
   */
  readonly fields: PesertaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Peserta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PesertaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sertifikat<T extends Peserta$sertifikatArgs<ExtArgs> = {}>(args?: Subset<T, Peserta$sertifikatArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sertifikasiTerdaftar<T extends Peserta$sertifikasiTerdaftarArgs<ExtArgs> = {}>(args?: Subset<T, Peserta$sertifikasiTerdaftarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SertifikasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Event<T extends Peserta$EventArgs<ExtArgs> = {}>(args?: Subset<T, Peserta$EventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Peserta model
   */
  interface PesertaFieldRefs {
    readonly id: FieldRef<"Peserta", 'String'>
    readonly provider: FieldRef<"Peserta", 'String'>
    readonly providerId: FieldRef<"Peserta", 'String'>
    readonly nim: FieldRef<"Peserta", 'String'>
    readonly name: FieldRef<"Peserta", 'String'>
    readonly email: FieldRef<"Peserta", 'String'>
    readonly phone: FieldRef<"Peserta", 'String'>
    readonly status: FieldRef<"Peserta", 'String'>
    readonly balance: FieldRef<"Peserta", 'Int'>
    readonly picture: FieldRef<"Peserta", 'String'>
    readonly createdAt: FieldRef<"Peserta", 'DateTime'>
    readonly updatedAt: FieldRef<"Peserta", 'DateTime'>
    readonly deletedAt: FieldRef<"Peserta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Peserta findUnique
   */
  export type PesertaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peserta
     */
    select?: PesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peserta
     */
    omit?: PesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesertaInclude<ExtArgs> | null
    /**
     * Filter, which Peserta to fetch.
     */
    where: PesertaWhereUniqueInput
  }

  /**
   * Peserta findUniqueOrThrow
   */
  export type PesertaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peserta
     */
    select?: PesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peserta
     */
    omit?: PesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesertaInclude<ExtArgs> | null
    /**
     * Filter, which Peserta to fetch.
     */
    where: PesertaWhereUniqueInput
  }

  /**
   * Peserta findFirst
   */
  export type PesertaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peserta
     */
    select?: PesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peserta
     */
    omit?: PesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesertaInclude<ExtArgs> | null
    /**
     * Filter, which Peserta to fetch.
     */
    where?: PesertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesertas to fetch.
     */
    orderBy?: PesertaOrderByWithRelationInput | PesertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pesertas.
     */
    cursor?: PesertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pesertas.
     */
    distinct?: PesertaScalarFieldEnum | PesertaScalarFieldEnum[]
  }

  /**
   * Peserta findFirstOrThrow
   */
  export type PesertaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peserta
     */
    select?: PesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peserta
     */
    omit?: PesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesertaInclude<ExtArgs> | null
    /**
     * Filter, which Peserta to fetch.
     */
    where?: PesertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesertas to fetch.
     */
    orderBy?: PesertaOrderByWithRelationInput | PesertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pesertas.
     */
    cursor?: PesertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pesertas.
     */
    distinct?: PesertaScalarFieldEnum | PesertaScalarFieldEnum[]
  }

  /**
   * Peserta findMany
   */
  export type PesertaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peserta
     */
    select?: PesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peserta
     */
    omit?: PesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesertaInclude<ExtArgs> | null
    /**
     * Filter, which Pesertas to fetch.
     */
    where?: PesertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesertas to fetch.
     */
    orderBy?: PesertaOrderByWithRelationInput | PesertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pesertas.
     */
    cursor?: PesertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesertas.
     */
    skip?: number
    distinct?: PesertaScalarFieldEnum | PesertaScalarFieldEnum[]
  }

  /**
   * Peserta create
   */
  export type PesertaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peserta
     */
    select?: PesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peserta
     */
    omit?: PesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesertaInclude<ExtArgs> | null
    /**
     * The data needed to create a Peserta.
     */
    data: XOR<PesertaCreateInput, PesertaUncheckedCreateInput>
  }

  /**
   * Peserta createMany
   */
  export type PesertaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pesertas.
     */
    data: PesertaCreateManyInput | PesertaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Peserta update
   */
  export type PesertaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peserta
     */
    select?: PesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peserta
     */
    omit?: PesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesertaInclude<ExtArgs> | null
    /**
     * The data needed to update a Peserta.
     */
    data: XOR<PesertaUpdateInput, PesertaUncheckedUpdateInput>
    /**
     * Choose, which Peserta to update.
     */
    where: PesertaWhereUniqueInput
  }

  /**
   * Peserta updateMany
   */
  export type PesertaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pesertas.
     */
    data: XOR<PesertaUpdateManyMutationInput, PesertaUncheckedUpdateManyInput>
    /**
     * Filter which Pesertas to update
     */
    where?: PesertaWhereInput
    /**
     * Limit how many Pesertas to update.
     */
    limit?: number
  }

  /**
   * Peserta upsert
   */
  export type PesertaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peserta
     */
    select?: PesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peserta
     */
    omit?: PesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesertaInclude<ExtArgs> | null
    /**
     * The filter to search for the Peserta to update in case it exists.
     */
    where: PesertaWhereUniqueInput
    /**
     * In case the Peserta found by the `where` argument doesn't exist, create a new Peserta with this data.
     */
    create: XOR<PesertaCreateInput, PesertaUncheckedCreateInput>
    /**
     * In case the Peserta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PesertaUpdateInput, PesertaUncheckedUpdateInput>
  }

  /**
   * Peserta delete
   */
  export type PesertaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peserta
     */
    select?: PesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peserta
     */
    omit?: PesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesertaInclude<ExtArgs> | null
    /**
     * Filter which Peserta to delete.
     */
    where: PesertaWhereUniqueInput
  }

  /**
   * Peserta deleteMany
   */
  export type PesertaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pesertas to delete
     */
    where?: PesertaWhereInput
    /**
     * Limit how many Pesertas to delete.
     */
    limit?: number
  }

  /**
   * Peserta.sertifikat
   */
  export type Peserta$sertifikatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
  }

  /**
   * Peserta.sertifikasiTerdaftar
   */
  export type Peserta$sertifikasiTerdaftarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikasi
     */
    select?: SertifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikasi
     */
    omit?: SertifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikasiInclude<ExtArgs> | null
    where?: SertifikasiWhereInput
    orderBy?: SertifikasiOrderByWithRelationInput | SertifikasiOrderByWithRelationInput[]
    cursor?: SertifikasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SertifikasiScalarFieldEnum | SertifikasiScalarFieldEnum[]
  }

  /**
   * Peserta.Event
   */
  export type Peserta$EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Peserta without action
   */
  export type PesertaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peserta
     */
    select?: PesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peserta
     */
    omit?: PesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesertaInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    sertifikasiId: string | null
    name: string | null
    NIP: string | null
    email: string | null
    phone: string | null
    NPWP: string | null
    namaBank: string | null
    noRek: string | null
    status: string | null
    notifikasi: string | null
    jabatan: string | null
    unit: string | null
    role: $Enums.EmployeeRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    sertifikasiId: string | null
    name: string | null
    NIP: string | null
    email: string | null
    phone: string | null
    NPWP: string | null
    namaBank: string | null
    noRek: string | null
    status: string | null
    notifikasi: string | null
    jabatan: string | null
    unit: string | null
    role: $Enums.EmployeeRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    sertifikasiId: number
    name: number
    NIP: number
    email: number
    phone: number
    NPWP: number
    namaBank: number
    noRek: number
    status: number
    notifikasi: number
    jabatan: number
    unit: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeMinAggregateInputType = {
    id?: true
    sertifikasiId?: true
    name?: true
    NIP?: true
    email?: true
    phone?: true
    NPWP?: true
    namaBank?: true
    noRek?: true
    status?: true
    notifikasi?: true
    jabatan?: true
    unit?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    sertifikasiId?: true
    name?: true
    NIP?: true
    email?: true
    phone?: true
    NPWP?: true
    namaBank?: true
    noRek?: true
    status?: true
    notifikasi?: true
    jabatan?: true
    unit?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    sertifikasiId?: true
    name?: true
    NIP?: true
    email?: true
    phone?: true
    NPWP?: true
    namaBank?: true
    noRek?: true
    status?: true
    notifikasi?: true
    jabatan?: true
    unit?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    sertifikasiId: string | null
    name: string
    NIP: string | null
    email: string
    phone: string | null
    NPWP: string | null
    namaBank: string | null
    noRek: string | null
    status: string | null
    notifikasi: string | null
    jabatan: string | null
    unit: string | null
    role: $Enums.EmployeeRole
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sertifikasiId?: boolean
    name?: boolean
    NIP?: boolean
    email?: boolean
    phone?: boolean
    NPWP?: boolean
    namaBank?: boolean
    noRek?: boolean
    status?: boolean
    notifikasi?: boolean
    jabatan?: boolean
    unit?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sertifikasi?: boolean | Employee$sertifikasiArgs<ExtArgs>
    staff?: boolean | Employee$staffArgs<ExtArgs>
    PIC?: boolean | Employee$PICArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>



  export type EmployeeSelectScalar = {
    id?: boolean
    sertifikasiId?: boolean
    name?: boolean
    NIP?: boolean
    email?: boolean
    phone?: boolean
    NPWP?: boolean
    namaBank?: boolean
    noRek?: boolean
    status?: boolean
    notifikasi?: boolean
    jabatan?: boolean
    unit?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sertifikasiId" | "name" | "NIP" | "email" | "phone" | "NPWP" | "namaBank" | "noRek" | "status" | "notifikasi" | "jabatan" | "unit" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sertifikasi?: boolean | Employee$sertifikasiArgs<ExtArgs>
    staff?: boolean | Employee$staffArgs<ExtArgs>
    PIC?: boolean | Employee$PICArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      sertifikasi: Prisma.$SertifikasiPayload<ExtArgs> | null
      staff: Prisma.$PanitiaPayload<ExtArgs>[]
      PIC: Prisma.$PanitiaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sertifikasiId: string | null
      name: string
      NIP: string | null
      email: string
      phone: string | null
      NPWP: string | null
      namaBank: string | null
      noRek: string | null
      status: string | null
      notifikasi: string | null
      jabatan: string | null
      unit: string | null
      role: $Enums.EmployeeRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sertifikasi<T extends Employee$sertifikasiArgs<ExtArgs> = {}>(args?: Subset<T, Employee$sertifikasiArgs<ExtArgs>>): Prisma__SertifikasiClient<$Result.GetResult<Prisma.$SertifikasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    staff<T extends Employee$staffArgs<ExtArgs> = {}>(args?: Subset<T, Employee$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanitiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PIC<T extends Employee$PICArgs<ExtArgs> = {}>(args?: Subset<T, Employee$PICArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanitiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly sertifikasiId: FieldRef<"Employee", 'String'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly NIP: FieldRef<"Employee", 'String'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly phone: FieldRef<"Employee", 'String'>
    readonly NPWP: FieldRef<"Employee", 'String'>
    readonly namaBank: FieldRef<"Employee", 'String'>
    readonly noRek: FieldRef<"Employee", 'String'>
    readonly status: FieldRef<"Employee", 'String'>
    readonly notifikasi: FieldRef<"Employee", 'String'>
    readonly jabatan: FieldRef<"Employee", 'String'>
    readonly unit: FieldRef<"Employee", 'String'>
    readonly role: FieldRef<"Employee", 'EmployeeRole'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.sertifikasi
   */
  export type Employee$sertifikasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikasi
     */
    select?: SertifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikasi
     */
    omit?: SertifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikasiInclude<ExtArgs> | null
    where?: SertifikasiWhereInput
  }

  /**
   * Employee.staff
   */
  export type Employee$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panitia
     */
    select?: PanitiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panitia
     */
    omit?: PanitiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanitiaInclude<ExtArgs> | null
    where?: PanitiaWhereInput
    orderBy?: PanitiaOrderByWithRelationInput | PanitiaOrderByWithRelationInput[]
    cursor?: PanitiaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PanitiaScalarFieldEnum | PanitiaScalarFieldEnum[]
  }

  /**
   * Employee.PIC
   */
  export type Employee$PICArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panitia
     */
    select?: PanitiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panitia
     */
    omit?: PanitiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanitiaInclude<ExtArgs> | null
    where?: PanitiaWhereInput
    orderBy?: PanitiaOrderByWithRelationInput | PanitiaOrderByWithRelationInput[]
    cursor?: PanitiaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PanitiaScalarFieldEnum | PanitiaScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Panitia
   */

  export type AggregatePanitia = {
    _count: PanitiaCountAggregateOutputType | null
    _min: PanitiaMinAggregateOutputType | null
    _max: PanitiaMaxAggregateOutputType | null
  }

  export type PanitiaMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    employeeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PanitiaMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    employeeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PanitiaCountAggregateOutputType = {
    id: number
    eventId: number
    employeeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PanitiaMinAggregateInputType = {
    id?: true
    eventId?: true
    employeeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PanitiaMaxAggregateInputType = {
    id?: true
    eventId?: true
    employeeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PanitiaCountAggregateInputType = {
    id?: true
    eventId?: true
    employeeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PanitiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Panitia to aggregate.
     */
    where?: PanitiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Panitias to fetch.
     */
    orderBy?: PanitiaOrderByWithRelationInput | PanitiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PanitiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Panitias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Panitias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Panitias
    **/
    _count?: true | PanitiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PanitiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PanitiaMaxAggregateInputType
  }

  export type GetPanitiaAggregateType<T extends PanitiaAggregateArgs> = {
        [P in keyof T & keyof AggregatePanitia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePanitia[P]>
      : GetScalarType<T[P], AggregatePanitia[P]>
  }




  export type PanitiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PanitiaWhereInput
    orderBy?: PanitiaOrderByWithAggregationInput | PanitiaOrderByWithAggregationInput[]
    by: PanitiaScalarFieldEnum[] | PanitiaScalarFieldEnum
    having?: PanitiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PanitiaCountAggregateInputType | true
    _min?: PanitiaMinAggregateInputType
    _max?: PanitiaMaxAggregateInputType
  }

  export type PanitiaGroupByOutputType = {
    id: string
    eventId: string
    employeeId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PanitiaCountAggregateOutputType | null
    _min: PanitiaMinAggregateOutputType | null
    _max: PanitiaMaxAggregateOutputType | null
  }

  type GetPanitiaGroupByPayload<T extends PanitiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PanitiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PanitiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PanitiaGroupByOutputType[P]>
            : GetScalarType<T[P], PanitiaGroupByOutputType[P]>
        }
      >
    >


  export type PanitiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    employeeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    staff?: boolean | Panitia$staffArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    PIC?: boolean | Panitia$PICArgs<ExtArgs>
    _count?: boolean | PanitiaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["panitia"]>



  export type PanitiaSelectScalar = {
    id?: boolean
    eventId?: boolean
    employeeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PanitiaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "employeeId" | "createdAt" | "updatedAt", ExtArgs["result"]["panitia"]>
  export type PanitiaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | Panitia$staffArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    PIC?: boolean | Panitia$PICArgs<ExtArgs>
    _count?: boolean | PanitiaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PanitiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Panitia"
    objects: {
      staff: Prisma.$EmployeePayload<ExtArgs>[]
      event: Prisma.$EventPayload<ExtArgs>
      PIC: Prisma.$EmployeePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      employeeId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["panitia"]>
    composites: {}
  }

  type PanitiaGetPayload<S extends boolean | null | undefined | PanitiaDefaultArgs> = $Result.GetResult<Prisma.$PanitiaPayload, S>

  type PanitiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PanitiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PanitiaCountAggregateInputType | true
    }

  export interface PanitiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Panitia'], meta: { name: 'Panitia' } }
    /**
     * Find zero or one Panitia that matches the filter.
     * @param {PanitiaFindUniqueArgs} args - Arguments to find a Panitia
     * @example
     * // Get one Panitia
     * const panitia = await prisma.panitia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PanitiaFindUniqueArgs>(args: SelectSubset<T, PanitiaFindUniqueArgs<ExtArgs>>): Prisma__PanitiaClient<$Result.GetResult<Prisma.$PanitiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Panitia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PanitiaFindUniqueOrThrowArgs} args - Arguments to find a Panitia
     * @example
     * // Get one Panitia
     * const panitia = await prisma.panitia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PanitiaFindUniqueOrThrowArgs>(args: SelectSubset<T, PanitiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PanitiaClient<$Result.GetResult<Prisma.$PanitiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Panitia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanitiaFindFirstArgs} args - Arguments to find a Panitia
     * @example
     * // Get one Panitia
     * const panitia = await prisma.panitia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PanitiaFindFirstArgs>(args?: SelectSubset<T, PanitiaFindFirstArgs<ExtArgs>>): Prisma__PanitiaClient<$Result.GetResult<Prisma.$PanitiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Panitia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanitiaFindFirstOrThrowArgs} args - Arguments to find a Panitia
     * @example
     * // Get one Panitia
     * const panitia = await prisma.panitia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PanitiaFindFirstOrThrowArgs>(args?: SelectSubset<T, PanitiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PanitiaClient<$Result.GetResult<Prisma.$PanitiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Panitias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanitiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Panitias
     * const panitias = await prisma.panitia.findMany()
     * 
     * // Get first 10 Panitias
     * const panitias = await prisma.panitia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const panitiaWithIdOnly = await prisma.panitia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PanitiaFindManyArgs>(args?: SelectSubset<T, PanitiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanitiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Panitia.
     * @param {PanitiaCreateArgs} args - Arguments to create a Panitia.
     * @example
     * // Create one Panitia
     * const Panitia = await prisma.panitia.create({
     *   data: {
     *     // ... data to create a Panitia
     *   }
     * })
     * 
     */
    create<T extends PanitiaCreateArgs>(args: SelectSubset<T, PanitiaCreateArgs<ExtArgs>>): Prisma__PanitiaClient<$Result.GetResult<Prisma.$PanitiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Panitias.
     * @param {PanitiaCreateManyArgs} args - Arguments to create many Panitias.
     * @example
     * // Create many Panitias
     * const panitia = await prisma.panitia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PanitiaCreateManyArgs>(args?: SelectSubset<T, PanitiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Panitia.
     * @param {PanitiaDeleteArgs} args - Arguments to delete one Panitia.
     * @example
     * // Delete one Panitia
     * const Panitia = await prisma.panitia.delete({
     *   where: {
     *     // ... filter to delete one Panitia
     *   }
     * })
     * 
     */
    delete<T extends PanitiaDeleteArgs>(args: SelectSubset<T, PanitiaDeleteArgs<ExtArgs>>): Prisma__PanitiaClient<$Result.GetResult<Prisma.$PanitiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Panitia.
     * @param {PanitiaUpdateArgs} args - Arguments to update one Panitia.
     * @example
     * // Update one Panitia
     * const panitia = await prisma.panitia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PanitiaUpdateArgs>(args: SelectSubset<T, PanitiaUpdateArgs<ExtArgs>>): Prisma__PanitiaClient<$Result.GetResult<Prisma.$PanitiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Panitias.
     * @param {PanitiaDeleteManyArgs} args - Arguments to filter Panitias to delete.
     * @example
     * // Delete a few Panitias
     * const { count } = await prisma.panitia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PanitiaDeleteManyArgs>(args?: SelectSubset<T, PanitiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Panitias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanitiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Panitias
     * const panitia = await prisma.panitia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PanitiaUpdateManyArgs>(args: SelectSubset<T, PanitiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Panitia.
     * @param {PanitiaUpsertArgs} args - Arguments to update or create a Panitia.
     * @example
     * // Update or create a Panitia
     * const panitia = await prisma.panitia.upsert({
     *   create: {
     *     // ... data to create a Panitia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Panitia we want to update
     *   }
     * })
     */
    upsert<T extends PanitiaUpsertArgs>(args: SelectSubset<T, PanitiaUpsertArgs<ExtArgs>>): Prisma__PanitiaClient<$Result.GetResult<Prisma.$PanitiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Panitias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanitiaCountArgs} args - Arguments to filter Panitias to count.
     * @example
     * // Count the number of Panitias
     * const count = await prisma.panitia.count({
     *   where: {
     *     // ... the filter for the Panitias we want to count
     *   }
     * })
    **/
    count<T extends PanitiaCountArgs>(
      args?: Subset<T, PanitiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PanitiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Panitia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanitiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PanitiaAggregateArgs>(args: Subset<T, PanitiaAggregateArgs>): Prisma.PrismaPromise<GetPanitiaAggregateType<T>>

    /**
     * Group by Panitia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanitiaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PanitiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PanitiaGroupByArgs['orderBy'] }
        : { orderBy?: PanitiaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PanitiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPanitiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Panitia model
   */
  readonly fields: PanitiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Panitia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PanitiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends Panitia$staffArgs<ExtArgs> = {}>(args?: Subset<T, Panitia$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    PIC<T extends Panitia$PICArgs<ExtArgs> = {}>(args?: Subset<T, Panitia$PICArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Panitia model
   */
  interface PanitiaFieldRefs {
    readonly id: FieldRef<"Panitia", 'String'>
    readonly eventId: FieldRef<"Panitia", 'String'>
    readonly employeeId: FieldRef<"Panitia", 'String'>
    readonly createdAt: FieldRef<"Panitia", 'DateTime'>
    readonly updatedAt: FieldRef<"Panitia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Panitia findUnique
   */
  export type PanitiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panitia
     */
    select?: PanitiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panitia
     */
    omit?: PanitiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanitiaInclude<ExtArgs> | null
    /**
     * Filter, which Panitia to fetch.
     */
    where: PanitiaWhereUniqueInput
  }

  /**
   * Panitia findUniqueOrThrow
   */
  export type PanitiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panitia
     */
    select?: PanitiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panitia
     */
    omit?: PanitiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanitiaInclude<ExtArgs> | null
    /**
     * Filter, which Panitia to fetch.
     */
    where: PanitiaWhereUniqueInput
  }

  /**
   * Panitia findFirst
   */
  export type PanitiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panitia
     */
    select?: PanitiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panitia
     */
    omit?: PanitiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanitiaInclude<ExtArgs> | null
    /**
     * Filter, which Panitia to fetch.
     */
    where?: PanitiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Panitias to fetch.
     */
    orderBy?: PanitiaOrderByWithRelationInput | PanitiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Panitias.
     */
    cursor?: PanitiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Panitias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Panitias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Panitias.
     */
    distinct?: PanitiaScalarFieldEnum | PanitiaScalarFieldEnum[]
  }

  /**
   * Panitia findFirstOrThrow
   */
  export type PanitiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panitia
     */
    select?: PanitiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panitia
     */
    omit?: PanitiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanitiaInclude<ExtArgs> | null
    /**
     * Filter, which Panitia to fetch.
     */
    where?: PanitiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Panitias to fetch.
     */
    orderBy?: PanitiaOrderByWithRelationInput | PanitiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Panitias.
     */
    cursor?: PanitiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Panitias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Panitias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Panitias.
     */
    distinct?: PanitiaScalarFieldEnum | PanitiaScalarFieldEnum[]
  }

  /**
   * Panitia findMany
   */
  export type PanitiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panitia
     */
    select?: PanitiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panitia
     */
    omit?: PanitiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanitiaInclude<ExtArgs> | null
    /**
     * Filter, which Panitias to fetch.
     */
    where?: PanitiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Panitias to fetch.
     */
    orderBy?: PanitiaOrderByWithRelationInput | PanitiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Panitias.
     */
    cursor?: PanitiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Panitias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Panitias.
     */
    skip?: number
    distinct?: PanitiaScalarFieldEnum | PanitiaScalarFieldEnum[]
  }

  /**
   * Panitia create
   */
  export type PanitiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panitia
     */
    select?: PanitiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panitia
     */
    omit?: PanitiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanitiaInclude<ExtArgs> | null
    /**
     * The data needed to create a Panitia.
     */
    data: XOR<PanitiaCreateInput, PanitiaUncheckedCreateInput>
  }

  /**
   * Panitia createMany
   */
  export type PanitiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Panitias.
     */
    data: PanitiaCreateManyInput | PanitiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Panitia update
   */
  export type PanitiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panitia
     */
    select?: PanitiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panitia
     */
    omit?: PanitiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanitiaInclude<ExtArgs> | null
    /**
     * The data needed to update a Panitia.
     */
    data: XOR<PanitiaUpdateInput, PanitiaUncheckedUpdateInput>
    /**
     * Choose, which Panitia to update.
     */
    where: PanitiaWhereUniqueInput
  }

  /**
   * Panitia updateMany
   */
  export type PanitiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Panitias.
     */
    data: XOR<PanitiaUpdateManyMutationInput, PanitiaUncheckedUpdateManyInput>
    /**
     * Filter which Panitias to update
     */
    where?: PanitiaWhereInput
    /**
     * Limit how many Panitias to update.
     */
    limit?: number
  }

  /**
   * Panitia upsert
   */
  export type PanitiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panitia
     */
    select?: PanitiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panitia
     */
    omit?: PanitiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanitiaInclude<ExtArgs> | null
    /**
     * The filter to search for the Panitia to update in case it exists.
     */
    where: PanitiaWhereUniqueInput
    /**
     * In case the Panitia found by the `where` argument doesn't exist, create a new Panitia with this data.
     */
    create: XOR<PanitiaCreateInput, PanitiaUncheckedCreateInput>
    /**
     * In case the Panitia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PanitiaUpdateInput, PanitiaUncheckedUpdateInput>
  }

  /**
   * Panitia delete
   */
  export type PanitiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panitia
     */
    select?: PanitiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panitia
     */
    omit?: PanitiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanitiaInclude<ExtArgs> | null
    /**
     * Filter which Panitia to delete.
     */
    where: PanitiaWhereUniqueInput
  }

  /**
   * Panitia deleteMany
   */
  export type PanitiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Panitias to delete
     */
    where?: PanitiaWhereInput
    /**
     * Limit how many Panitias to delete.
     */
    limit?: number
  }

  /**
   * Panitia.staff
   */
  export type Panitia$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Panitia.PIC
   */
  export type Panitia$PICArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * Panitia without action
   */
  export type PanitiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panitia
     */
    select?: PanitiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Panitia
     */
    omit?: PanitiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanitiaInclude<ExtArgs> | null
  }


  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    size: number | null
  }

  export type FileSumAggregateOutputType = {
    size: number | null
  }

  export type FileMinAggregateOutputType = {
    id: string | null
    filename: string | null
    originalName: string | null
    path: string | null
    mimetype: string | null
    size: number | null
    extension: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    notulensiId: string | null
    pesertaId: string | null
  }

  export type FileMaxAggregateOutputType = {
    id: string | null
    filename: string | null
    originalName: string | null
    path: string | null
    mimetype: string | null
    size: number | null
    extension: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    notulensiId: string | null
    pesertaId: string | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    filename: number
    originalName: number
    path: number
    mimetype: number
    size: number
    extension: number
    description: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    notulensiId: number
    pesertaId: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    size?: true
  }

  export type FileSumAggregateInputType = {
    size?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    filename?: true
    originalName?: true
    path?: true
    mimetype?: true
    size?: true
    extension?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    notulensiId?: true
    pesertaId?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    filename?: true
    originalName?: true
    path?: true
    mimetype?: true
    size?: true
    extension?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    notulensiId?: true
    pesertaId?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    filename?: true
    originalName?: true
    path?: true
    mimetype?: true
    size?: true
    extension?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    notulensiId?: true
    pesertaId?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: string
    filename: string
    originalName: string
    path: string
    mimetype: string
    size: number
    extension: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    notulensiId: string | null
    pesertaId: string | null
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    originalName?: boolean
    path?: boolean
    mimetype?: boolean
    size?: boolean
    extension?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    notulensiId?: boolean
    pesertaId?: boolean
    notulensi?: boolean | File$notulensiArgs<ExtArgs>
    Peserta?: boolean | File$PesertaArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>



  export type FileSelectScalar = {
    id?: boolean
    filename?: boolean
    originalName?: boolean
    path?: boolean
    mimetype?: boolean
    size?: boolean
    extension?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    notulensiId?: boolean
    pesertaId?: boolean
  }

  export type FileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "originalName" | "path" | "mimetype" | "size" | "extension" | "description" | "createdAt" | "updatedAt" | "deletedAt" | "notulensiId" | "pesertaId", ExtArgs["result"]["file"]>
  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notulensi?: boolean | File$notulensiArgs<ExtArgs>
    Peserta?: boolean | File$PesertaArgs<ExtArgs>
  }

  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      notulensi: Prisma.$NotulensiPayload<ExtArgs> | null
      Peserta: Prisma.$PesertaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      filename: string
      originalName: string
      path: string
      mimetype: string
      size: number
      extension: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      notulensiId: string | null
      pesertaId: string | null
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileFindManyArgs>(args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends FileCreateArgs>(args: SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileCreateManyArgs>(args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends FileDeleteArgs>(args: SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUpdateArgs>(args: SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileDeleteManyArgs>(args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUpdateManyArgs>(args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(args: SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notulensi<T extends File$notulensiArgs<ExtArgs> = {}>(args?: Subset<T, File$notulensiArgs<ExtArgs>>): Prisma__NotulensiClient<$Result.GetResult<Prisma.$NotulensiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Peserta<T extends File$PesertaArgs<ExtArgs> = {}>(args?: Subset<T, File$PesertaArgs<ExtArgs>>): Prisma__PesertaClient<$Result.GetResult<Prisma.$PesertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the File model
   */
  interface FileFieldRefs {
    readonly id: FieldRef<"File", 'String'>
    readonly filename: FieldRef<"File", 'String'>
    readonly originalName: FieldRef<"File", 'String'>
    readonly path: FieldRef<"File", 'String'>
    readonly mimetype: FieldRef<"File", 'String'>
    readonly size: FieldRef<"File", 'Int'>
    readonly extension: FieldRef<"File", 'String'>
    readonly description: FieldRef<"File", 'String'>
    readonly createdAt: FieldRef<"File", 'DateTime'>
    readonly updatedAt: FieldRef<"File", 'DateTime'>
    readonly deletedAt: FieldRef<"File", 'DateTime'>
    readonly notulensiId: FieldRef<"File", 'String'>
    readonly pesertaId: FieldRef<"File", 'String'>
  }
    

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }

  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }

  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to delete.
     */
    limit?: number
  }

  /**
   * File.notulensi
   */
  export type File$notulensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notulensi
     */
    select?: NotulensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notulensi
     */
    omit?: NotulensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotulensiInclude<ExtArgs> | null
    where?: NotulensiWhereInput
  }

  /**
   * File.Peserta
   */
  export type File$PesertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peserta
     */
    select?: PesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peserta
     */
    omit?: PesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesertaInclude<ExtArgs> | null
    where?: PesertaWhereInput
  }

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
  }


  /**
   * Model Sertifikasi
   */

  export type AggregateSertifikasi = {
    _count: SertifikasiCountAggregateOutputType | null
    _min: SertifikasiMinAggregateOutputType | null
    _max: SertifikasiMaxAggregateOutputType | null
  }

  export type SertifikasiMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
  }

  export type SertifikasiMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
  }

  export type SertifikasiCountAggregateOutputType = {
    id: number
    name: number
    code: number
    _all: number
  }


  export type SertifikasiMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
  }

  export type SertifikasiMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
  }

  export type SertifikasiCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    _all?: true
  }

  export type SertifikasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sertifikasi to aggregate.
     */
    where?: SertifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sertifikasis to fetch.
     */
    orderBy?: SertifikasiOrderByWithRelationInput | SertifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SertifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sertifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sertifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sertifikasis
    **/
    _count?: true | SertifikasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SertifikasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SertifikasiMaxAggregateInputType
  }

  export type GetSertifikasiAggregateType<T extends SertifikasiAggregateArgs> = {
        [P in keyof T & keyof AggregateSertifikasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSertifikasi[P]>
      : GetScalarType<T[P], AggregateSertifikasi[P]>
  }




  export type SertifikasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SertifikasiWhereInput
    orderBy?: SertifikasiOrderByWithAggregationInput | SertifikasiOrderByWithAggregationInput[]
    by: SertifikasiScalarFieldEnum[] | SertifikasiScalarFieldEnum
    having?: SertifikasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SertifikasiCountAggregateInputType | true
    _min?: SertifikasiMinAggregateInputType
    _max?: SertifikasiMaxAggregateInputType
  }

  export type SertifikasiGroupByOutputType = {
    id: string
    name: string
    code: string
    _count: SertifikasiCountAggregateOutputType | null
    _min: SertifikasiMinAggregateOutputType | null
    _max: SertifikasiMaxAggregateOutputType | null
  }

  type GetSertifikasiGroupByPayload<T extends SertifikasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SertifikasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SertifikasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SertifikasiGroupByOutputType[P]>
            : GetScalarType<T[P], SertifikasiGroupByOutputType[P]>
        }
      >
    >


  export type SertifikasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    Employee?: boolean | Sertifikasi$EmployeeArgs<ExtArgs>
    Peserta?: boolean | Sertifikasi$PesertaArgs<ExtArgs>
    _count?: boolean | SertifikasiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sertifikasi"]>



  export type SertifikasiSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
  }

  export type SertifikasiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code", ExtArgs["result"]["sertifikasi"]>
  export type SertifikasiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee?: boolean | Sertifikasi$EmployeeArgs<ExtArgs>
    Peserta?: boolean | Sertifikasi$PesertaArgs<ExtArgs>
    _count?: boolean | SertifikasiCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SertifikasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sertifikasi"
    objects: {
      Employee: Prisma.$EmployeePayload<ExtArgs>[]
      Peserta: Prisma.$PesertaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
    }, ExtArgs["result"]["sertifikasi"]>
    composites: {}
  }

  type SertifikasiGetPayload<S extends boolean | null | undefined | SertifikasiDefaultArgs> = $Result.GetResult<Prisma.$SertifikasiPayload, S>

  type SertifikasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SertifikasiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SertifikasiCountAggregateInputType | true
    }

  export interface SertifikasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sertifikasi'], meta: { name: 'Sertifikasi' } }
    /**
     * Find zero or one Sertifikasi that matches the filter.
     * @param {SertifikasiFindUniqueArgs} args - Arguments to find a Sertifikasi
     * @example
     * // Get one Sertifikasi
     * const sertifikasi = await prisma.sertifikasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SertifikasiFindUniqueArgs>(args: SelectSubset<T, SertifikasiFindUniqueArgs<ExtArgs>>): Prisma__SertifikasiClient<$Result.GetResult<Prisma.$SertifikasiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sertifikasi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SertifikasiFindUniqueOrThrowArgs} args - Arguments to find a Sertifikasi
     * @example
     * // Get one Sertifikasi
     * const sertifikasi = await prisma.sertifikasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SertifikasiFindUniqueOrThrowArgs>(args: SelectSubset<T, SertifikasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SertifikasiClient<$Result.GetResult<Prisma.$SertifikasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sertifikasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikasiFindFirstArgs} args - Arguments to find a Sertifikasi
     * @example
     * // Get one Sertifikasi
     * const sertifikasi = await prisma.sertifikasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SertifikasiFindFirstArgs>(args?: SelectSubset<T, SertifikasiFindFirstArgs<ExtArgs>>): Prisma__SertifikasiClient<$Result.GetResult<Prisma.$SertifikasiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sertifikasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikasiFindFirstOrThrowArgs} args - Arguments to find a Sertifikasi
     * @example
     * // Get one Sertifikasi
     * const sertifikasi = await prisma.sertifikasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SertifikasiFindFirstOrThrowArgs>(args?: SelectSubset<T, SertifikasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__SertifikasiClient<$Result.GetResult<Prisma.$SertifikasiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sertifikasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sertifikasis
     * const sertifikasis = await prisma.sertifikasi.findMany()
     * 
     * // Get first 10 Sertifikasis
     * const sertifikasis = await prisma.sertifikasi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sertifikasiWithIdOnly = await prisma.sertifikasi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SertifikasiFindManyArgs>(args?: SelectSubset<T, SertifikasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SertifikasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sertifikasi.
     * @param {SertifikasiCreateArgs} args - Arguments to create a Sertifikasi.
     * @example
     * // Create one Sertifikasi
     * const Sertifikasi = await prisma.sertifikasi.create({
     *   data: {
     *     // ... data to create a Sertifikasi
     *   }
     * })
     * 
     */
    create<T extends SertifikasiCreateArgs>(args: SelectSubset<T, SertifikasiCreateArgs<ExtArgs>>): Prisma__SertifikasiClient<$Result.GetResult<Prisma.$SertifikasiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sertifikasis.
     * @param {SertifikasiCreateManyArgs} args - Arguments to create many Sertifikasis.
     * @example
     * // Create many Sertifikasis
     * const sertifikasi = await prisma.sertifikasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SertifikasiCreateManyArgs>(args?: SelectSubset<T, SertifikasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sertifikasi.
     * @param {SertifikasiDeleteArgs} args - Arguments to delete one Sertifikasi.
     * @example
     * // Delete one Sertifikasi
     * const Sertifikasi = await prisma.sertifikasi.delete({
     *   where: {
     *     // ... filter to delete one Sertifikasi
     *   }
     * })
     * 
     */
    delete<T extends SertifikasiDeleteArgs>(args: SelectSubset<T, SertifikasiDeleteArgs<ExtArgs>>): Prisma__SertifikasiClient<$Result.GetResult<Prisma.$SertifikasiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sertifikasi.
     * @param {SertifikasiUpdateArgs} args - Arguments to update one Sertifikasi.
     * @example
     * // Update one Sertifikasi
     * const sertifikasi = await prisma.sertifikasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SertifikasiUpdateArgs>(args: SelectSubset<T, SertifikasiUpdateArgs<ExtArgs>>): Prisma__SertifikasiClient<$Result.GetResult<Prisma.$SertifikasiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sertifikasis.
     * @param {SertifikasiDeleteManyArgs} args - Arguments to filter Sertifikasis to delete.
     * @example
     * // Delete a few Sertifikasis
     * const { count } = await prisma.sertifikasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SertifikasiDeleteManyArgs>(args?: SelectSubset<T, SertifikasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sertifikasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sertifikasis
     * const sertifikasi = await prisma.sertifikasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SertifikasiUpdateManyArgs>(args: SelectSubset<T, SertifikasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sertifikasi.
     * @param {SertifikasiUpsertArgs} args - Arguments to update or create a Sertifikasi.
     * @example
     * // Update or create a Sertifikasi
     * const sertifikasi = await prisma.sertifikasi.upsert({
     *   create: {
     *     // ... data to create a Sertifikasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sertifikasi we want to update
     *   }
     * })
     */
    upsert<T extends SertifikasiUpsertArgs>(args: SelectSubset<T, SertifikasiUpsertArgs<ExtArgs>>): Prisma__SertifikasiClient<$Result.GetResult<Prisma.$SertifikasiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sertifikasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikasiCountArgs} args - Arguments to filter Sertifikasis to count.
     * @example
     * // Count the number of Sertifikasis
     * const count = await prisma.sertifikasi.count({
     *   where: {
     *     // ... the filter for the Sertifikasis we want to count
     *   }
     * })
    **/
    count<T extends SertifikasiCountArgs>(
      args?: Subset<T, SertifikasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SertifikasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sertifikasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SertifikasiAggregateArgs>(args: Subset<T, SertifikasiAggregateArgs>): Prisma.PrismaPromise<GetSertifikasiAggregateType<T>>

    /**
     * Group by Sertifikasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikasiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SertifikasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SertifikasiGroupByArgs['orderBy'] }
        : { orderBy?: SertifikasiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SertifikasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSertifikasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sertifikasi model
   */
  readonly fields: SertifikasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sertifikasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SertifikasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Employee<T extends Sertifikasi$EmployeeArgs<ExtArgs> = {}>(args?: Subset<T, Sertifikasi$EmployeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Peserta<T extends Sertifikasi$PesertaArgs<ExtArgs> = {}>(args?: Subset<T, Sertifikasi$PesertaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sertifikasi model
   */
  interface SertifikasiFieldRefs {
    readonly id: FieldRef<"Sertifikasi", 'String'>
    readonly name: FieldRef<"Sertifikasi", 'String'>
    readonly code: FieldRef<"Sertifikasi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sertifikasi findUnique
   */
  export type SertifikasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikasi
     */
    select?: SertifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikasi
     */
    omit?: SertifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikasiInclude<ExtArgs> | null
    /**
     * Filter, which Sertifikasi to fetch.
     */
    where: SertifikasiWhereUniqueInput
  }

  /**
   * Sertifikasi findUniqueOrThrow
   */
  export type SertifikasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikasi
     */
    select?: SertifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikasi
     */
    omit?: SertifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikasiInclude<ExtArgs> | null
    /**
     * Filter, which Sertifikasi to fetch.
     */
    where: SertifikasiWhereUniqueInput
  }

  /**
   * Sertifikasi findFirst
   */
  export type SertifikasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikasi
     */
    select?: SertifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikasi
     */
    omit?: SertifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikasiInclude<ExtArgs> | null
    /**
     * Filter, which Sertifikasi to fetch.
     */
    where?: SertifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sertifikasis to fetch.
     */
    orderBy?: SertifikasiOrderByWithRelationInput | SertifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sertifikasis.
     */
    cursor?: SertifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sertifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sertifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sertifikasis.
     */
    distinct?: SertifikasiScalarFieldEnum | SertifikasiScalarFieldEnum[]
  }

  /**
   * Sertifikasi findFirstOrThrow
   */
  export type SertifikasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikasi
     */
    select?: SertifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikasi
     */
    omit?: SertifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikasiInclude<ExtArgs> | null
    /**
     * Filter, which Sertifikasi to fetch.
     */
    where?: SertifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sertifikasis to fetch.
     */
    orderBy?: SertifikasiOrderByWithRelationInput | SertifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sertifikasis.
     */
    cursor?: SertifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sertifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sertifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sertifikasis.
     */
    distinct?: SertifikasiScalarFieldEnum | SertifikasiScalarFieldEnum[]
  }

  /**
   * Sertifikasi findMany
   */
  export type SertifikasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikasi
     */
    select?: SertifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikasi
     */
    omit?: SertifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikasiInclude<ExtArgs> | null
    /**
     * Filter, which Sertifikasis to fetch.
     */
    where?: SertifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sertifikasis to fetch.
     */
    orderBy?: SertifikasiOrderByWithRelationInput | SertifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sertifikasis.
     */
    cursor?: SertifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sertifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sertifikasis.
     */
    skip?: number
    distinct?: SertifikasiScalarFieldEnum | SertifikasiScalarFieldEnum[]
  }

  /**
   * Sertifikasi create
   */
  export type SertifikasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikasi
     */
    select?: SertifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikasi
     */
    omit?: SertifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikasiInclude<ExtArgs> | null
    /**
     * The data needed to create a Sertifikasi.
     */
    data: XOR<SertifikasiCreateInput, SertifikasiUncheckedCreateInput>
  }

  /**
   * Sertifikasi createMany
   */
  export type SertifikasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sertifikasis.
     */
    data: SertifikasiCreateManyInput | SertifikasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sertifikasi update
   */
  export type SertifikasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikasi
     */
    select?: SertifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikasi
     */
    omit?: SertifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikasiInclude<ExtArgs> | null
    /**
     * The data needed to update a Sertifikasi.
     */
    data: XOR<SertifikasiUpdateInput, SertifikasiUncheckedUpdateInput>
    /**
     * Choose, which Sertifikasi to update.
     */
    where: SertifikasiWhereUniqueInput
  }

  /**
   * Sertifikasi updateMany
   */
  export type SertifikasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sertifikasis.
     */
    data: XOR<SertifikasiUpdateManyMutationInput, SertifikasiUncheckedUpdateManyInput>
    /**
     * Filter which Sertifikasis to update
     */
    where?: SertifikasiWhereInput
    /**
     * Limit how many Sertifikasis to update.
     */
    limit?: number
  }

  /**
   * Sertifikasi upsert
   */
  export type SertifikasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikasi
     */
    select?: SertifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikasi
     */
    omit?: SertifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikasiInclude<ExtArgs> | null
    /**
     * The filter to search for the Sertifikasi to update in case it exists.
     */
    where: SertifikasiWhereUniqueInput
    /**
     * In case the Sertifikasi found by the `where` argument doesn't exist, create a new Sertifikasi with this data.
     */
    create: XOR<SertifikasiCreateInput, SertifikasiUncheckedCreateInput>
    /**
     * In case the Sertifikasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SertifikasiUpdateInput, SertifikasiUncheckedUpdateInput>
  }

  /**
   * Sertifikasi delete
   */
  export type SertifikasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikasi
     */
    select?: SertifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikasi
     */
    omit?: SertifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikasiInclude<ExtArgs> | null
    /**
     * Filter which Sertifikasi to delete.
     */
    where: SertifikasiWhereUniqueInput
  }

  /**
   * Sertifikasi deleteMany
   */
  export type SertifikasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sertifikasis to delete
     */
    where?: SertifikasiWhereInput
    /**
     * Limit how many Sertifikasis to delete.
     */
    limit?: number
  }

  /**
   * Sertifikasi.Employee
   */
  export type Sertifikasi$EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Sertifikasi.Peserta
   */
  export type Sertifikasi$PesertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peserta
     */
    select?: PesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peserta
     */
    omit?: PesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesertaInclude<ExtArgs> | null
    where?: PesertaWhereInput
    orderBy?: PesertaOrderByWithRelationInput | PesertaOrderByWithRelationInput[]
    cursor?: PesertaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PesertaScalarFieldEnum | PesertaScalarFieldEnum[]
  }

  /**
   * Sertifikasi without action
   */
  export type SertifikasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikasi
     */
    select?: SertifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikasi
     */
    omit?: SertifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikasiInclude<ExtArgs> | null
  }


  /**
   * Model Vendor
   */

  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  export type VendorMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type VendorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type VendorCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type VendorMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type VendorMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type VendorCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type VendorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendor to aggregate.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendors
    **/
    _count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }




  export type VendorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorWhereInput
    orderBy?: VendorOrderByWithAggregationInput | VendorOrderByWithAggregationInput[]
    by: VendorScalarFieldEnum[] | VendorScalarFieldEnum
    having?: VendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorCountAggregateInputType | true
    _min?: VendorMinAggregateInputType
    _max?: VendorMaxAggregateInputType
  }

  export type VendorGroupByOutputType = {
    id: string
    name: string
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: VendorCountAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorGroupByOutputType[P]>
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
        }
      >
    >


  export type VendorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["vendor"]>



  export type VendorSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type VendorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "address" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["vendor"]>

  export type $VendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      phone: string | null
      address: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["vendor"]>
    composites: {}
  }

  type VendorGetPayload<S extends boolean | null | undefined | VendorDefaultArgs> = $Result.GetResult<Prisma.$VendorPayload, S>

  type VendorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorCountAggregateInputType | true
    }

  export interface VendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendor'], meta: { name: 'Vendor' } }
    /**
     * Find zero or one Vendor that matches the filter.
     * @param {VendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorFindUniqueArgs>(args: SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorFindFirstArgs>(args?: SelectSubset<T, VendorFindFirstArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorWithIdOnly = await prisma.vendor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorFindManyArgs>(args?: SelectSubset<T, VendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendor.
     * @param {VendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     * 
     */
    create<T extends VendorCreateArgs>(args: SelectSubset<T, VendorCreateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendors.
     * @param {VendorCreateManyArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorCreateManyArgs>(args?: SelectSubset<T, VendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vendor.
     * @param {VendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     * 
     */
    delete<T extends VendorDeleteArgs>(args: SelectSubset<T, VendorDeleteArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendor.
     * @param {VendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorUpdateArgs>(args: SelectSubset<T, VendorUpdateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendors.
     * @param {VendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorDeleteManyArgs>(args?: SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorUpdateManyArgs>(args: SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vendor.
     * @param {VendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
     */
    upsert<T extends VendorUpsertArgs>(args: SelectSubset<T, VendorUpsertArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends VendorCountArgs>(
      args?: Subset<T, VendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorAggregateArgs>(args: Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendor model
   */
  readonly fields: VendorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vendor model
   */
  interface VendorFieldRefs {
    readonly id: FieldRef<"Vendor", 'String'>
    readonly name: FieldRef<"Vendor", 'String'>
    readonly email: FieldRef<"Vendor", 'String'>
    readonly phone: FieldRef<"Vendor", 'String'>
    readonly address: FieldRef<"Vendor", 'String'>
    readonly createdAt: FieldRef<"Vendor", 'DateTime'>
    readonly updatedAt: FieldRef<"Vendor", 'DateTime'>
    readonly deletedAt: FieldRef<"Vendor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vendor findUnique
   */
  export type VendorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findUniqueOrThrow
   */
  export type VendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findFirst
   */
  export type VendorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findFirstOrThrow
   */
  export type VendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findMany
   */
  export type VendorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Filter, which Vendors to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor create
   */
  export type VendorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data needed to create a Vendor.
     */
    data: XOR<VendorCreateInput, VendorUncheckedCreateInput>
  }

  /**
   * Vendor createMany
   */
  export type VendorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendor update
   */
  export type VendorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data needed to update a Vendor.
     */
    data: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
    /**
     * Choose, which Vendor to update.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor updateMany
   */
  export type VendorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor upsert
   */
  export type VendorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The filter to search for the Vendor to update in case it exists.
     */
    where: VendorWhereUniqueInput
    /**
     * In case the Vendor found by the `where` argument doesn't exist, create a new Vendor with this data.
     */
    create: XOR<VendorCreateInput, VendorUncheckedCreateInput>
    /**
     * In case the Vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
  }

  /**
   * Vendor delete
   */
  export type VendorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Filter which Vendor to delete.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor deleteMany
   */
  export type VendorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendors to delete
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to delete.
     */
    limit?: number
  }

  /**
   * Vendor without action
   */
  export type VendorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
  }


  /**
   * Model Asset
   */

  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetAvgAggregateOutputType = {
    price: number | null
    qty: number | null
  }

  export type AssetSumAggregateOutputType = {
    price: number | null
    qty: number | null
  }

  export type AssetMinAggregateOutputType = {
    id: string | null
    vendorId: string | null
    name: string | null
    description: string | null
    checkInDate: Date | null
    checkOutDate: Date | null
    expiredAt: Date | null
    condition: string | null
    location: string | null
    price: number | null
    satuan: string | null
    qty: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AssetMaxAggregateOutputType = {
    id: string | null
    vendorId: string | null
    name: string | null
    description: string | null
    checkInDate: Date | null
    checkOutDate: Date | null
    expiredAt: Date | null
    condition: string | null
    location: string | null
    price: number | null
    satuan: string | null
    qty: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AssetCountAggregateOutputType = {
    id: number
    vendorId: number
    name: number
    description: number
    checkInDate: number
    checkOutDate: number
    expiredAt: number
    condition: number
    location: number
    price: number
    satuan: number
    qty: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type AssetAvgAggregateInputType = {
    price?: true
    qty?: true
  }

  export type AssetSumAggregateInputType = {
    price?: true
    qty?: true
  }

  export type AssetMinAggregateInputType = {
    id?: true
    vendorId?: true
    name?: true
    description?: true
    checkInDate?: true
    checkOutDate?: true
    expiredAt?: true
    condition?: true
    location?: true
    price?: true
    satuan?: true
    qty?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AssetMaxAggregateInputType = {
    id?: true
    vendorId?: true
    name?: true
    description?: true
    checkInDate?: true
    checkOutDate?: true
    expiredAt?: true
    condition?: true
    location?: true
    price?: true
    satuan?: true
    qty?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AssetCountAggregateInputType = {
    id?: true
    vendorId?: true
    name?: true
    description?: true
    checkInDate?: true
    checkOutDate?: true
    expiredAt?: true
    condition?: true
    location?: true
    price?: true
    satuan?: true
    qty?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type AssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asset to aggregate.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assets
    **/
    _count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }




  export type AssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithAggregationInput | AssetOrderByWithAggregationInput[]
    by: AssetScalarFieldEnum[] | AssetScalarFieldEnum
    having?: AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _avg?: AssetAvgAggregateInputType
    _sum?: AssetSumAggregateInputType
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }

  export type AssetGroupByOutputType = {
    id: string
    vendorId: string | null
    name: string
    description: string | null
    checkInDate: Date | null
    checkOutDate: Date | null
    expiredAt: Date | null
    condition: string | null
    location: string | null
    price: number | null
    satuan: string | null
    qty: number | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetGroupByOutputType[P]>
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      >
    >


  export type AssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    name?: boolean
    description?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    expiredAt?: boolean
    condition?: boolean
    location?: boolean
    price?: boolean
    satuan?: boolean
    qty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["asset"]>



  export type AssetSelectScalar = {
    id?: boolean
    vendorId?: boolean
    name?: boolean
    description?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    expiredAt?: boolean
    condition?: boolean
    location?: boolean
    price?: boolean
    satuan?: boolean
    qty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type AssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendorId" | "name" | "description" | "checkInDate" | "checkOutDate" | "expiredAt" | "condition" | "location" | "price" | "satuan" | "qty" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["asset"]>

  export type $AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asset"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendorId: string | null
      name: string
      description: string | null
      checkInDate: Date | null
      checkOutDate: Date | null
      expiredAt: Date | null
      condition: string | null
      location: string | null
      price: number | null
      satuan: string | null
      qty: number | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["asset"]>
    composites: {}
  }

  type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = $Result.GetResult<Prisma.$AssetPayload, S>

  type AssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetCountAggregateInputType | true
    }

  export interface AssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asset'], meta: { name: 'Asset' } }
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetFindUniqueArgs>(args: SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetFindFirstArgs>(args?: SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetWithIdOnly = await prisma.asset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetFindManyArgs>(args?: SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
     */
    create<T extends AssetCreateArgs>(args: SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assets.
     * @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetCreateManyArgs>(args?: SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
     */
    delete<T extends AssetDeleteArgs>(args: SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetUpdateArgs>(args: SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetDeleteManyArgs>(args?: SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetUpdateManyArgs>(args: SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
     */
    upsert<T extends AssetUpsertArgs>(args: SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(
      args?: Subset<T, AssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs['orderBy'] }
        : { orderBy?: AssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asset model
   */
  readonly fields: AssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Asset model
   */
  interface AssetFieldRefs {
    readonly id: FieldRef<"Asset", 'String'>
    readonly vendorId: FieldRef<"Asset", 'String'>
    readonly name: FieldRef<"Asset", 'String'>
    readonly description: FieldRef<"Asset", 'String'>
    readonly checkInDate: FieldRef<"Asset", 'DateTime'>
    readonly checkOutDate: FieldRef<"Asset", 'DateTime'>
    readonly expiredAt: FieldRef<"Asset", 'DateTime'>
    readonly condition: FieldRef<"Asset", 'String'>
    readonly location: FieldRef<"Asset", 'String'>
    readonly price: FieldRef<"Asset", 'Int'>
    readonly satuan: FieldRef<"Asset", 'String'>
    readonly qty: FieldRef<"Asset", 'Int'>
    readonly createdAt: FieldRef<"Asset", 'DateTime'>
    readonly updatedAt: FieldRef<"Asset", 'DateTime'>
    readonly deletedAt: FieldRef<"Asset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Asset findUnique
   */
  export type AssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findUniqueOrThrow
   */
  export type AssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findFirst
   */
  export type AssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findFirstOrThrow
   */
  export type AssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findMany
   */
  export type AssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset create
   */
  export type AssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data needed to create a Asset.
     */
    data: XOR<AssetCreateInput, AssetUncheckedCreateInput>
  }

  /**
   * Asset createMany
   */
  export type AssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asset update
   */
  export type AssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data needed to update a Asset.
     */
    data: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
    /**
     * Choose, which Asset to update.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset updateMany
   */
  export type AssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
  }

  /**
   * Asset upsert
   */
  export type AssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The filter to search for the Asset to update in case it exists.
     */
    where: AssetWhereUniqueInput
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     */
    create: XOR<AssetCreateInput, AssetUncheckedCreateInput>
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
  }

  /**
   * Asset delete
   */
  export type AssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Filter which Asset to delete.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset deleteMany
   */
  export type AssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to delete
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to delete.
     */
    limit?: number
  }

  /**
   * Asset without action
   */
  export type AssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
  }


  /**
   * Model AssetHistory
   */

  export type AggregateAssetHistory = {
    _count: AssetHistoryCountAggregateOutputType | null
    _avg: AssetHistoryAvgAggregateOutputType | null
    _sum: AssetHistorySumAggregateOutputType | null
    _min: AssetHistoryMinAggregateOutputType | null
    _max: AssetHistoryMaxAggregateOutputType | null
  }

  export type AssetHistoryAvgAggregateOutputType = {
    qty: number | null
  }

  export type AssetHistorySumAggregateOutputType = {
    qty: number | null
  }

  export type AssetHistoryMinAggregateOutputType = {
    id: string | null
    assetName: string | null
    status: string | null
    checkInDate: Date | null
    checkOutDate: Date | null
    distributor: string | null
    qty: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AssetHistoryMaxAggregateOutputType = {
    id: string | null
    assetName: string | null
    status: string | null
    checkInDate: Date | null
    checkOutDate: Date | null
    distributor: string | null
    qty: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AssetHistoryCountAggregateOutputType = {
    id: number
    assetName: number
    status: number
    checkInDate: number
    checkOutDate: number
    distributor: number
    qty: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type AssetHistoryAvgAggregateInputType = {
    qty?: true
  }

  export type AssetHistorySumAggregateInputType = {
    qty?: true
  }

  export type AssetHistoryMinAggregateInputType = {
    id?: true
    assetName?: true
    status?: true
    checkInDate?: true
    checkOutDate?: true
    distributor?: true
    qty?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AssetHistoryMaxAggregateInputType = {
    id?: true
    assetName?: true
    status?: true
    checkInDate?: true
    checkOutDate?: true
    distributor?: true
    qty?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AssetHistoryCountAggregateInputType = {
    id?: true
    assetName?: true
    status?: true
    checkInDate?: true
    checkOutDate?: true
    distributor?: true
    qty?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type AssetHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetHistory to aggregate.
     */
    where?: AssetHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetHistories to fetch.
     */
    orderBy?: AssetHistoryOrderByWithRelationInput | AssetHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssetHistories
    **/
    _count?: true | AssetHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetHistoryMaxAggregateInputType
  }

  export type GetAssetHistoryAggregateType<T extends AssetHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAssetHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssetHistory[P]>
      : GetScalarType<T[P], AggregateAssetHistory[P]>
  }




  export type AssetHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetHistoryWhereInput
    orderBy?: AssetHistoryOrderByWithAggregationInput | AssetHistoryOrderByWithAggregationInput[]
    by: AssetHistoryScalarFieldEnum[] | AssetHistoryScalarFieldEnum
    having?: AssetHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetHistoryCountAggregateInputType | true
    _avg?: AssetHistoryAvgAggregateInputType
    _sum?: AssetHistorySumAggregateInputType
    _min?: AssetHistoryMinAggregateInputType
    _max?: AssetHistoryMaxAggregateInputType
  }

  export type AssetHistoryGroupByOutputType = {
    id: string
    assetName: string | null
    status: string | null
    checkInDate: Date | null
    checkOutDate: Date | null
    distributor: string | null
    qty: number | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: AssetHistoryCountAggregateOutputType | null
    _avg: AssetHistoryAvgAggregateOutputType | null
    _sum: AssetHistorySumAggregateOutputType | null
    _min: AssetHistoryMinAggregateOutputType | null
    _max: AssetHistoryMaxAggregateOutputType | null
  }

  type GetAssetHistoryGroupByPayload<T extends AssetHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], AssetHistoryGroupByOutputType[P]>
        }
      >
    >


  export type AssetHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetName?: boolean
    status?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    distributor?: boolean
    qty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["assetHistory"]>



  export type AssetHistorySelectScalar = {
    id?: boolean
    assetName?: boolean
    status?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    distributor?: boolean
    qty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type AssetHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assetName" | "status" | "checkInDate" | "checkOutDate" | "distributor" | "qty" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["assetHistory"]>

  export type $AssetHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssetHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assetName: string | null
      status: string | null
      checkInDate: Date | null
      checkOutDate: Date | null
      distributor: string | null
      qty: number | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["assetHistory"]>
    composites: {}
  }

  type AssetHistoryGetPayload<S extends boolean | null | undefined | AssetHistoryDefaultArgs> = $Result.GetResult<Prisma.$AssetHistoryPayload, S>

  type AssetHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetHistoryCountAggregateInputType | true
    }

  export interface AssetHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssetHistory'], meta: { name: 'AssetHistory' } }
    /**
     * Find zero or one AssetHistory that matches the filter.
     * @param {AssetHistoryFindUniqueArgs} args - Arguments to find a AssetHistory
     * @example
     * // Get one AssetHistory
     * const assetHistory = await prisma.assetHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetHistoryFindUniqueArgs>(args: SelectSubset<T, AssetHistoryFindUniqueArgs<ExtArgs>>): Prisma__AssetHistoryClient<$Result.GetResult<Prisma.$AssetHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssetHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetHistoryFindUniqueOrThrowArgs} args - Arguments to find a AssetHistory
     * @example
     * // Get one AssetHistory
     * const assetHistory = await prisma.assetHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetHistoryClient<$Result.GetResult<Prisma.$AssetHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssetHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetHistoryFindFirstArgs} args - Arguments to find a AssetHistory
     * @example
     * // Get one AssetHistory
     * const assetHistory = await prisma.assetHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetHistoryFindFirstArgs>(args?: SelectSubset<T, AssetHistoryFindFirstArgs<ExtArgs>>): Prisma__AssetHistoryClient<$Result.GetResult<Prisma.$AssetHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssetHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetHistoryFindFirstOrThrowArgs} args - Arguments to find a AssetHistory
     * @example
     * // Get one AssetHistory
     * const assetHistory = await prisma.assetHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetHistoryClient<$Result.GetResult<Prisma.$AssetHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssetHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssetHistories
     * const assetHistories = await prisma.assetHistory.findMany()
     * 
     * // Get first 10 AssetHistories
     * const assetHistories = await prisma.assetHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetHistoryWithIdOnly = await prisma.assetHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetHistoryFindManyArgs>(args?: SelectSubset<T, AssetHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssetHistory.
     * @param {AssetHistoryCreateArgs} args - Arguments to create a AssetHistory.
     * @example
     * // Create one AssetHistory
     * const AssetHistory = await prisma.assetHistory.create({
     *   data: {
     *     // ... data to create a AssetHistory
     *   }
     * })
     * 
     */
    create<T extends AssetHistoryCreateArgs>(args: SelectSubset<T, AssetHistoryCreateArgs<ExtArgs>>): Prisma__AssetHistoryClient<$Result.GetResult<Prisma.$AssetHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssetHistories.
     * @param {AssetHistoryCreateManyArgs} args - Arguments to create many AssetHistories.
     * @example
     * // Create many AssetHistories
     * const assetHistory = await prisma.assetHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetHistoryCreateManyArgs>(args?: SelectSubset<T, AssetHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AssetHistory.
     * @param {AssetHistoryDeleteArgs} args - Arguments to delete one AssetHistory.
     * @example
     * // Delete one AssetHistory
     * const AssetHistory = await prisma.assetHistory.delete({
     *   where: {
     *     // ... filter to delete one AssetHistory
     *   }
     * })
     * 
     */
    delete<T extends AssetHistoryDeleteArgs>(args: SelectSubset<T, AssetHistoryDeleteArgs<ExtArgs>>): Prisma__AssetHistoryClient<$Result.GetResult<Prisma.$AssetHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssetHistory.
     * @param {AssetHistoryUpdateArgs} args - Arguments to update one AssetHistory.
     * @example
     * // Update one AssetHistory
     * const assetHistory = await prisma.assetHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetHistoryUpdateArgs>(args: SelectSubset<T, AssetHistoryUpdateArgs<ExtArgs>>): Prisma__AssetHistoryClient<$Result.GetResult<Prisma.$AssetHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssetHistories.
     * @param {AssetHistoryDeleteManyArgs} args - Arguments to filter AssetHistories to delete.
     * @example
     * // Delete a few AssetHistories
     * const { count } = await prisma.assetHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetHistoryDeleteManyArgs>(args?: SelectSubset<T, AssetHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssetHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssetHistories
     * const assetHistory = await prisma.assetHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetHistoryUpdateManyArgs>(args: SelectSubset<T, AssetHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AssetHistory.
     * @param {AssetHistoryUpsertArgs} args - Arguments to update or create a AssetHistory.
     * @example
     * // Update or create a AssetHistory
     * const assetHistory = await prisma.assetHistory.upsert({
     *   create: {
     *     // ... data to create a AssetHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssetHistory we want to update
     *   }
     * })
     */
    upsert<T extends AssetHistoryUpsertArgs>(args: SelectSubset<T, AssetHistoryUpsertArgs<ExtArgs>>): Prisma__AssetHistoryClient<$Result.GetResult<Prisma.$AssetHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssetHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetHistoryCountArgs} args - Arguments to filter AssetHistories to count.
     * @example
     * // Count the number of AssetHistories
     * const count = await prisma.assetHistory.count({
     *   where: {
     *     // ... the filter for the AssetHistories we want to count
     *   }
     * })
    **/
    count<T extends AssetHistoryCountArgs>(
      args?: Subset<T, AssetHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssetHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetHistoryAggregateArgs>(args: Subset<T, AssetHistoryAggregateArgs>): Prisma.PrismaPromise<GetAssetHistoryAggregateType<T>>

    /**
     * Group by AssetHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetHistoryGroupByArgs['orderBy'] }
        : { orderBy?: AssetHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssetHistory model
   */
  readonly fields: AssetHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssetHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssetHistory model
   */
  interface AssetHistoryFieldRefs {
    readonly id: FieldRef<"AssetHistory", 'String'>
    readonly assetName: FieldRef<"AssetHistory", 'String'>
    readonly status: FieldRef<"AssetHistory", 'String'>
    readonly checkInDate: FieldRef<"AssetHistory", 'DateTime'>
    readonly checkOutDate: FieldRef<"AssetHistory", 'DateTime'>
    readonly distributor: FieldRef<"AssetHistory", 'String'>
    readonly qty: FieldRef<"AssetHistory", 'Int'>
    readonly createdAt: FieldRef<"AssetHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"AssetHistory", 'DateTime'>
    readonly deletedAt: FieldRef<"AssetHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssetHistory findUnique
   */
  export type AssetHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AssetHistory to fetch.
     */
    where: AssetHistoryWhereUniqueInput
  }

  /**
   * AssetHistory findUniqueOrThrow
   */
  export type AssetHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AssetHistory to fetch.
     */
    where: AssetHistoryWhereUniqueInput
  }

  /**
   * AssetHistory findFirst
   */
  export type AssetHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AssetHistory to fetch.
     */
    where?: AssetHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetHistories to fetch.
     */
    orderBy?: AssetHistoryOrderByWithRelationInput | AssetHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetHistories.
     */
    cursor?: AssetHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetHistories.
     */
    distinct?: AssetHistoryScalarFieldEnum | AssetHistoryScalarFieldEnum[]
  }

  /**
   * AssetHistory findFirstOrThrow
   */
  export type AssetHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AssetHistory to fetch.
     */
    where?: AssetHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetHistories to fetch.
     */
    orderBy?: AssetHistoryOrderByWithRelationInput | AssetHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetHistories.
     */
    cursor?: AssetHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetHistories.
     */
    distinct?: AssetHistoryScalarFieldEnum | AssetHistoryScalarFieldEnum[]
  }

  /**
   * AssetHistory findMany
   */
  export type AssetHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AssetHistories to fetch.
     */
    where?: AssetHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetHistories to fetch.
     */
    orderBy?: AssetHistoryOrderByWithRelationInput | AssetHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssetHistories.
     */
    cursor?: AssetHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetHistories.
     */
    skip?: number
    distinct?: AssetHistoryScalarFieldEnum | AssetHistoryScalarFieldEnum[]
  }

  /**
   * AssetHistory create
   */
  export type AssetHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a AssetHistory.
     */
    data: XOR<AssetHistoryCreateInput, AssetHistoryUncheckedCreateInput>
  }

  /**
   * AssetHistory createMany
   */
  export type AssetHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssetHistories.
     */
    data: AssetHistoryCreateManyInput | AssetHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssetHistory update
   */
  export type AssetHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a AssetHistory.
     */
    data: XOR<AssetHistoryUpdateInput, AssetHistoryUncheckedUpdateInput>
    /**
     * Choose, which AssetHistory to update.
     */
    where: AssetHistoryWhereUniqueInput
  }

  /**
   * AssetHistory updateMany
   */
  export type AssetHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssetHistories.
     */
    data: XOR<AssetHistoryUpdateManyMutationInput, AssetHistoryUncheckedUpdateManyInput>
    /**
     * Filter which AssetHistories to update
     */
    where?: AssetHistoryWhereInput
    /**
     * Limit how many AssetHistories to update.
     */
    limit?: number
  }

  /**
   * AssetHistory upsert
   */
  export type AssetHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the AssetHistory to update in case it exists.
     */
    where: AssetHistoryWhereUniqueInput
    /**
     * In case the AssetHistory found by the `where` argument doesn't exist, create a new AssetHistory with this data.
     */
    create: XOR<AssetHistoryCreateInput, AssetHistoryUncheckedCreateInput>
    /**
     * In case the AssetHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetHistoryUpdateInput, AssetHistoryUncheckedUpdateInput>
  }

  /**
   * AssetHistory delete
   */
  export type AssetHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
    /**
     * Filter which AssetHistory to delete.
     */
    where: AssetHistoryWhereUniqueInput
  }

  /**
   * AssetHistory deleteMany
   */
  export type AssetHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetHistories to delete
     */
    where?: AssetHistoryWhereInput
    /**
     * Limit how many AssetHistories to delete.
     */
    limit?: number
  }

  /**
   * AssetHistory without action
   */
  export type AssetHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetHistory
     */
    select?: AssetHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssetHistory
     */
    omit?: AssetHistoryOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    salt: 'salt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProgramScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ProgramScalarFieldEnum = (typeof ProgramScalarFieldEnum)[keyof typeof ProgramScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    programId: 'programId',
    jenisEventId: 'jenisEventId',
    notulensiId: 'notulensiId',
    name: 'name',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    harga: 'harga',
    tempat: 'tempat',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const JenisEventScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type JenisEventScalarFieldEnum = (typeof JenisEventScalarFieldEnum)[keyof typeof JenisEventScalarFieldEnum]


  export const NotulensiScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    name: 'name',
    tanggal: 'tanggal',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type NotulensiScalarFieldEnum = (typeof NotulensiScalarFieldEnum)[keyof typeof NotulensiScalarFieldEnum]


  export const PesertaScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    providerId: 'providerId',
    nim: 'nim',
    name: 'name',
    email: 'email',
    phone: 'phone',
    status: 'status',
    balance: 'balance',
    picture: 'picture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type PesertaScalarFieldEnum = (typeof PesertaScalarFieldEnum)[keyof typeof PesertaScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    sertifikasiId: 'sertifikasiId',
    name: 'name',
    NIP: 'NIP',
    email: 'email',
    phone: 'phone',
    NPWP: 'NPWP',
    namaBank: 'namaBank',
    noRek: 'noRek',
    status: 'status',
    notifikasi: 'notifikasi',
    jabatan: 'jabatan',
    unit: 'unit',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const PanitiaScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    employeeId: 'employeeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PanitiaScalarFieldEnum = (typeof PanitiaScalarFieldEnum)[keyof typeof PanitiaScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    originalName: 'originalName',
    path: 'path',
    mimetype: 'mimetype',
    size: 'size',
    extension: 'extension',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    notulensiId: 'notulensiId',
    pesertaId: 'pesertaId'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const SertifikasiScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code'
  };

  export type SertifikasiScalarFieldEnum = (typeof SertifikasiScalarFieldEnum)[keyof typeof SertifikasiScalarFieldEnum]


  export const VendorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  export const AssetScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    name: 'name',
    description: 'description',
    checkInDate: 'checkInDate',
    checkOutDate: 'checkOutDate',
    expiredAt: 'expiredAt',
    condition: 'condition',
    location: 'location',
    price: 'price',
    satuan: 'satuan',
    qty: 'qty',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const AssetHistoryScalarFieldEnum: {
    id: 'id',
    assetName: 'assetName',
    status: 'status',
    checkInDate: 'checkInDate',
    checkOutDate: 'checkOutDate',
    distributor: 'distributor',
    qty: 'qty',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type AssetHistoryScalarFieldEnum = (typeof AssetHistoryScalarFieldEnum)[keyof typeof AssetHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    salt: 'salt'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ProgramOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status'
  };

  export type ProgramOrderByRelevanceFieldEnum = (typeof ProgramOrderByRelevanceFieldEnum)[keyof typeof ProgramOrderByRelevanceFieldEnum]


  export const EventOrderByRelevanceFieldEnum: {
    id: 'id',
    programId: 'programId',
    jenisEventId: 'jenisEventId',
    notulensiId: 'notulensiId',
    name: 'name',
    description: 'description',
    tempat: 'tempat'
  };

  export type EventOrderByRelevanceFieldEnum = (typeof EventOrderByRelevanceFieldEnum)[keyof typeof EventOrderByRelevanceFieldEnum]


  export const JenisEventOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type JenisEventOrderByRelevanceFieldEnum = (typeof JenisEventOrderByRelevanceFieldEnum)[keyof typeof JenisEventOrderByRelevanceFieldEnum]


  export const NotulensiOrderByRelevanceFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    name: 'name',
    description: 'description'
  };

  export type NotulensiOrderByRelevanceFieldEnum = (typeof NotulensiOrderByRelevanceFieldEnum)[keyof typeof NotulensiOrderByRelevanceFieldEnum]


  export const PesertaOrderByRelevanceFieldEnum: {
    id: 'id',
    provider: 'provider',
    providerId: 'providerId',
    nim: 'nim',
    name: 'name',
    email: 'email',
    phone: 'phone',
    status: 'status',
    picture: 'picture'
  };

  export type PesertaOrderByRelevanceFieldEnum = (typeof PesertaOrderByRelevanceFieldEnum)[keyof typeof PesertaOrderByRelevanceFieldEnum]


  export const EmployeeOrderByRelevanceFieldEnum: {
    id: 'id',
    sertifikasiId: 'sertifikasiId',
    name: 'name',
    NIP: 'NIP',
    email: 'email',
    phone: 'phone',
    NPWP: 'NPWP',
    namaBank: 'namaBank',
    noRek: 'noRek',
    status: 'status',
    notifikasi: 'notifikasi',
    jabatan: 'jabatan',
    unit: 'unit'
  };

  export type EmployeeOrderByRelevanceFieldEnum = (typeof EmployeeOrderByRelevanceFieldEnum)[keyof typeof EmployeeOrderByRelevanceFieldEnum]


  export const PanitiaOrderByRelevanceFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    employeeId: 'employeeId'
  };

  export type PanitiaOrderByRelevanceFieldEnum = (typeof PanitiaOrderByRelevanceFieldEnum)[keyof typeof PanitiaOrderByRelevanceFieldEnum]


  export const FileOrderByRelevanceFieldEnum: {
    id: 'id',
    filename: 'filename',
    originalName: 'originalName',
    path: 'path',
    mimetype: 'mimetype',
    extension: 'extension',
    description: 'description',
    notulensiId: 'notulensiId',
    pesertaId: 'pesertaId'
  };

  export type FileOrderByRelevanceFieldEnum = (typeof FileOrderByRelevanceFieldEnum)[keyof typeof FileOrderByRelevanceFieldEnum]


  export const SertifikasiOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code'
  };

  export type SertifikasiOrderByRelevanceFieldEnum = (typeof SertifikasiOrderByRelevanceFieldEnum)[keyof typeof SertifikasiOrderByRelevanceFieldEnum]


  export const VendorOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address'
  };

  export type VendorOrderByRelevanceFieldEnum = (typeof VendorOrderByRelevanceFieldEnum)[keyof typeof VendorOrderByRelevanceFieldEnum]


  export const AssetOrderByRelevanceFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    name: 'name',
    description: 'description',
    condition: 'condition',
    location: 'location',
    satuan: 'satuan'
  };

  export type AssetOrderByRelevanceFieldEnum = (typeof AssetOrderByRelevanceFieldEnum)[keyof typeof AssetOrderByRelevanceFieldEnum]


  export const AssetHistoryOrderByRelevanceFieldEnum: {
    id: 'id',
    assetName: 'assetName',
    status: 'status',
    distributor: 'distributor'
  };

  export type AssetHistoryOrderByRelevanceFieldEnum = (typeof AssetHistoryOrderByRelevanceFieldEnum)[keyof typeof AssetHistoryOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'EmployeeRole'
   */
  export type EnumEmployeeRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeRole'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    salt?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProgramWhereInput = {
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    id?: StringFilter<"Program"> | string
    name?: StringFilter<"Program"> | string
    description?: StringNullableFilter<"Program"> | string | null
    status?: StringNullableFilter<"Program"> | string | null
    startDate?: DateTimeFilter<"Program"> | Date | string
    endDate?: DateTimeFilter<"Program"> | Date | string
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Program"> | Date | string | null
    Event?: EventListRelationFilter
  }

  export type ProgramOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Event?: EventOrderByRelationAggregateInput
    _relevance?: ProgramOrderByRelevanceInput
  }

  export type ProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    name?: StringFilter<"Program"> | string
    description?: StringNullableFilter<"Program"> | string | null
    status?: StringNullableFilter<"Program"> | string | null
    startDate?: DateTimeFilter<"Program"> | Date | string
    endDate?: DateTimeFilter<"Program"> | Date | string
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Program"> | Date | string | null
    Event?: EventListRelationFilter
  }, "id">

  export type ProgramOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ProgramCountOrderByAggregateInput
    _max?: ProgramMaxOrderByAggregateInput
    _min?: ProgramMinOrderByAggregateInput
  }

  export type ProgramScalarWhereWithAggregatesInput = {
    AND?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    OR?: ProgramScalarWhereWithAggregatesInput[]
    NOT?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Program"> | string
    name?: StringWithAggregatesFilter<"Program"> | string
    description?: StringNullableWithAggregatesFilter<"Program"> | string | null
    status?: StringNullableWithAggregatesFilter<"Program"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Program"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Program"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Program"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Program"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Program"> | Date | string | null
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    programId?: StringFilter<"Event"> | string
    jenisEventId?: StringNullableFilter<"Event"> | string | null
    notulensiId?: StringNullableFilter<"Event"> | string | null
    name?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    harga?: IntNullableFilter<"Event"> | number | null
    tempat?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    peserta?: PesertaListRelationFilter
    notulensi?: NotulensiListRelationFilter
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
    JenisEvent?: XOR<JenisEventNullableScalarRelationFilter, JenisEventWhereInput> | null
    Panitia?: PanitiaListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    programId?: SortOrder
    jenisEventId?: SortOrderInput | SortOrder
    notulensiId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    harga?: SortOrderInput | SortOrder
    tempat?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    peserta?: PesertaOrderByRelationAggregateInput
    notulensi?: NotulensiOrderByRelationAggregateInput
    program?: ProgramOrderByWithRelationInput
    JenisEvent?: JenisEventOrderByWithRelationInput
    Panitia?: PanitiaOrderByRelationAggregateInput
    _relevance?: EventOrderByRelevanceInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    programId?: StringFilter<"Event"> | string
    jenisEventId?: StringNullableFilter<"Event"> | string | null
    notulensiId?: StringNullableFilter<"Event"> | string | null
    name?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    harga?: IntNullableFilter<"Event"> | number | null
    tempat?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    peserta?: PesertaListRelationFilter
    notulensi?: NotulensiListRelationFilter
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
    JenisEvent?: XOR<JenisEventNullableScalarRelationFilter, JenisEventWhereInput> | null
    Panitia?: PanitiaListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    programId?: SortOrder
    jenisEventId?: SortOrderInput | SortOrder
    notulensiId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    harga?: SortOrderInput | SortOrder
    tempat?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    programId?: StringWithAggregatesFilter<"Event"> | string
    jenisEventId?: StringNullableWithAggregatesFilter<"Event"> | string | null
    notulensiId?: StringNullableWithAggregatesFilter<"Event"> | string | null
    name?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    harga?: IntNullableWithAggregatesFilter<"Event"> | number | null
    tempat?: StringNullableWithAggregatesFilter<"Event"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
  }

  export type JenisEventWhereInput = {
    AND?: JenisEventWhereInput | JenisEventWhereInput[]
    OR?: JenisEventWhereInput[]
    NOT?: JenisEventWhereInput | JenisEventWhereInput[]
    id?: StringFilter<"JenisEvent"> | string
    name?: StringFilter<"JenisEvent"> | string
    createdAt?: DateTimeFilter<"JenisEvent"> | Date | string
    updatedAt?: DateTimeFilter<"JenisEvent"> | Date | string
    deletedAt?: DateTimeNullableFilter<"JenisEvent"> | Date | string | null
    Event?: EventListRelationFilter
  }

  export type JenisEventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Event?: EventOrderByRelationAggregateInput
    _relevance?: JenisEventOrderByRelevanceInput
  }

  export type JenisEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JenisEventWhereInput | JenisEventWhereInput[]
    OR?: JenisEventWhereInput[]
    NOT?: JenisEventWhereInput | JenisEventWhereInput[]
    name?: StringFilter<"JenisEvent"> | string
    createdAt?: DateTimeFilter<"JenisEvent"> | Date | string
    updatedAt?: DateTimeFilter<"JenisEvent"> | Date | string
    deletedAt?: DateTimeNullableFilter<"JenisEvent"> | Date | string | null
    Event?: EventListRelationFilter
  }, "id">

  export type JenisEventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: JenisEventCountOrderByAggregateInput
    _max?: JenisEventMaxOrderByAggregateInput
    _min?: JenisEventMinOrderByAggregateInput
  }

  export type JenisEventScalarWhereWithAggregatesInput = {
    AND?: JenisEventScalarWhereWithAggregatesInput | JenisEventScalarWhereWithAggregatesInput[]
    OR?: JenisEventScalarWhereWithAggregatesInput[]
    NOT?: JenisEventScalarWhereWithAggregatesInput | JenisEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JenisEvent"> | string
    name?: StringWithAggregatesFilter<"JenisEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"JenisEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JenisEvent"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"JenisEvent"> | Date | string | null
  }

  export type NotulensiWhereInput = {
    AND?: NotulensiWhereInput | NotulensiWhereInput[]
    OR?: NotulensiWhereInput[]
    NOT?: NotulensiWhereInput | NotulensiWhereInput[]
    id?: StringFilter<"Notulensi"> | string
    eventId?: StringFilter<"Notulensi"> | string
    name?: StringFilter<"Notulensi"> | string
    tanggal?: DateTimeFilter<"Notulensi"> | Date | string
    description?: StringNullableFilter<"Notulensi"> | string | null
    createdAt?: DateTimeFilter<"Notulensi"> | Date | string
    updatedAt?: DateTimeFilter<"Notulensi"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Notulensi"> | Date | string | null
    File?: FileListRelationFilter
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type NotulensiOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    tanggal?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    File?: FileOrderByRelationAggregateInput
    Event?: EventOrderByWithRelationInput
    _relevance?: NotulensiOrderByRelevanceInput
  }

  export type NotulensiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotulensiWhereInput | NotulensiWhereInput[]
    OR?: NotulensiWhereInput[]
    NOT?: NotulensiWhereInput | NotulensiWhereInput[]
    eventId?: StringFilter<"Notulensi"> | string
    name?: StringFilter<"Notulensi"> | string
    tanggal?: DateTimeFilter<"Notulensi"> | Date | string
    description?: StringNullableFilter<"Notulensi"> | string | null
    createdAt?: DateTimeFilter<"Notulensi"> | Date | string
    updatedAt?: DateTimeFilter<"Notulensi"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Notulensi"> | Date | string | null
    File?: FileListRelationFilter
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type NotulensiOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    tanggal?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: NotulensiCountOrderByAggregateInput
    _max?: NotulensiMaxOrderByAggregateInput
    _min?: NotulensiMinOrderByAggregateInput
  }

  export type NotulensiScalarWhereWithAggregatesInput = {
    AND?: NotulensiScalarWhereWithAggregatesInput | NotulensiScalarWhereWithAggregatesInput[]
    OR?: NotulensiScalarWhereWithAggregatesInput[]
    NOT?: NotulensiScalarWhereWithAggregatesInput | NotulensiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notulensi"> | string
    eventId?: StringWithAggregatesFilter<"Notulensi"> | string
    name?: StringWithAggregatesFilter<"Notulensi"> | string
    tanggal?: DateTimeWithAggregatesFilter<"Notulensi"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Notulensi"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notulensi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notulensi"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Notulensi"> | Date | string | null
  }

  export type PesertaWhereInput = {
    AND?: PesertaWhereInput | PesertaWhereInput[]
    OR?: PesertaWhereInput[]
    NOT?: PesertaWhereInput | PesertaWhereInput[]
    id?: StringFilter<"Peserta"> | string
    provider?: StringFilter<"Peserta"> | string
    providerId?: StringNullableFilter<"Peserta"> | string | null
    nim?: StringNullableFilter<"Peserta"> | string | null
    name?: StringFilter<"Peserta"> | string
    email?: StringFilter<"Peserta"> | string
    phone?: StringNullableFilter<"Peserta"> | string | null
    status?: StringNullableFilter<"Peserta"> | string | null
    balance?: IntNullableFilter<"Peserta"> | number | null
    picture?: StringNullableFilter<"Peserta"> | string | null
    createdAt?: DateTimeFilter<"Peserta"> | Date | string
    updatedAt?: DateTimeFilter<"Peserta"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Peserta"> | Date | string | null
    sertifikat?: XOR<FileNullableScalarRelationFilter, FileWhereInput> | null
    sertifikasiTerdaftar?: SertifikasiListRelationFilter
    Event?: EventListRelationFilter
  }

  export type PesertaOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    providerId?: SortOrderInput | SortOrder
    nim?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    balance?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    sertifikat?: FileOrderByWithRelationInput
    sertifikasiTerdaftar?: SertifikasiOrderByRelationAggregateInput
    Event?: EventOrderByRelationAggregateInput
    _relevance?: PesertaOrderByRelevanceInput
  }

  export type PesertaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: PesertaWhereInput | PesertaWhereInput[]
    OR?: PesertaWhereInput[]
    NOT?: PesertaWhereInput | PesertaWhereInput[]
    provider?: StringFilter<"Peserta"> | string
    providerId?: StringNullableFilter<"Peserta"> | string | null
    nim?: StringNullableFilter<"Peserta"> | string | null
    name?: StringFilter<"Peserta"> | string
    phone?: StringNullableFilter<"Peserta"> | string | null
    status?: StringNullableFilter<"Peserta"> | string | null
    balance?: IntNullableFilter<"Peserta"> | number | null
    picture?: StringNullableFilter<"Peserta"> | string | null
    createdAt?: DateTimeFilter<"Peserta"> | Date | string
    updatedAt?: DateTimeFilter<"Peserta"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Peserta"> | Date | string | null
    sertifikat?: XOR<FileNullableScalarRelationFilter, FileWhereInput> | null
    sertifikasiTerdaftar?: SertifikasiListRelationFilter
    Event?: EventListRelationFilter
  }, "id" | "email">

  export type PesertaOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    providerId?: SortOrderInput | SortOrder
    nim?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    balance?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PesertaCountOrderByAggregateInput
    _avg?: PesertaAvgOrderByAggregateInput
    _max?: PesertaMaxOrderByAggregateInput
    _min?: PesertaMinOrderByAggregateInput
    _sum?: PesertaSumOrderByAggregateInput
  }

  export type PesertaScalarWhereWithAggregatesInput = {
    AND?: PesertaScalarWhereWithAggregatesInput | PesertaScalarWhereWithAggregatesInput[]
    OR?: PesertaScalarWhereWithAggregatesInput[]
    NOT?: PesertaScalarWhereWithAggregatesInput | PesertaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Peserta"> | string
    provider?: StringWithAggregatesFilter<"Peserta"> | string
    providerId?: StringNullableWithAggregatesFilter<"Peserta"> | string | null
    nim?: StringNullableWithAggregatesFilter<"Peserta"> | string | null
    name?: StringWithAggregatesFilter<"Peserta"> | string
    email?: StringWithAggregatesFilter<"Peserta"> | string
    phone?: StringNullableWithAggregatesFilter<"Peserta"> | string | null
    status?: StringNullableWithAggregatesFilter<"Peserta"> | string | null
    balance?: IntNullableWithAggregatesFilter<"Peserta"> | number | null
    picture?: StringNullableWithAggregatesFilter<"Peserta"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Peserta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Peserta"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Peserta"> | Date | string | null
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    sertifikasiId?: StringNullableFilter<"Employee"> | string | null
    name?: StringFilter<"Employee"> | string
    NIP?: StringNullableFilter<"Employee"> | string | null
    email?: StringFilter<"Employee"> | string
    phone?: StringNullableFilter<"Employee"> | string | null
    NPWP?: StringNullableFilter<"Employee"> | string | null
    namaBank?: StringNullableFilter<"Employee"> | string | null
    noRek?: StringNullableFilter<"Employee"> | string | null
    status?: StringNullableFilter<"Employee"> | string | null
    notifikasi?: StringNullableFilter<"Employee"> | string | null
    jabatan?: StringNullableFilter<"Employee"> | string | null
    unit?: StringNullableFilter<"Employee"> | string | null
    role?: EnumEmployeeRoleFilter<"Employee"> | $Enums.EmployeeRole
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    sertifikasi?: XOR<SertifikasiNullableScalarRelationFilter, SertifikasiWhereInput> | null
    staff?: PanitiaListRelationFilter
    PIC?: PanitiaListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    sertifikasiId?: SortOrderInput | SortOrder
    name?: SortOrder
    NIP?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    NPWP?: SortOrderInput | SortOrder
    namaBank?: SortOrderInput | SortOrder
    noRek?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    notifikasi?: SortOrderInput | SortOrder
    jabatan?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sertifikasi?: SertifikasiOrderByWithRelationInput
    staff?: PanitiaOrderByRelationAggregateInput
    PIC?: PanitiaOrderByRelationAggregateInput
    _relevance?: EmployeeOrderByRelevanceInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    sertifikasiId?: StringNullableFilter<"Employee"> | string | null
    name?: StringFilter<"Employee"> | string
    NIP?: StringNullableFilter<"Employee"> | string | null
    email?: StringFilter<"Employee"> | string
    phone?: StringNullableFilter<"Employee"> | string | null
    NPWP?: StringNullableFilter<"Employee"> | string | null
    namaBank?: StringNullableFilter<"Employee"> | string | null
    noRek?: StringNullableFilter<"Employee"> | string | null
    status?: StringNullableFilter<"Employee"> | string | null
    notifikasi?: StringNullableFilter<"Employee"> | string | null
    jabatan?: StringNullableFilter<"Employee"> | string | null
    unit?: StringNullableFilter<"Employee"> | string | null
    role?: EnumEmployeeRoleFilter<"Employee"> | $Enums.EmployeeRole
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    sertifikasi?: XOR<SertifikasiNullableScalarRelationFilter, SertifikasiWhereInput> | null
    staff?: PanitiaListRelationFilter
    PIC?: PanitiaListRelationFilter
  }, "id">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    sertifikasiId?: SortOrderInput | SortOrder
    name?: SortOrder
    NIP?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    NPWP?: SortOrderInput | SortOrder
    namaBank?: SortOrderInput | SortOrder
    noRek?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    notifikasi?: SortOrderInput | SortOrder
    jabatan?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    sertifikasiId?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    name?: StringWithAggregatesFilter<"Employee"> | string
    NIP?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    email?: StringWithAggregatesFilter<"Employee"> | string
    phone?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    NPWP?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    namaBank?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    noRek?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    status?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    notifikasi?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    jabatan?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    unit?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    role?: EnumEmployeeRoleWithAggregatesFilter<"Employee"> | $Enums.EmployeeRole
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type PanitiaWhereInput = {
    AND?: PanitiaWhereInput | PanitiaWhereInput[]
    OR?: PanitiaWhereInput[]
    NOT?: PanitiaWhereInput | PanitiaWhereInput[]
    id?: StringFilter<"Panitia"> | string
    eventId?: StringFilter<"Panitia"> | string
    employeeId?: StringNullableFilter<"Panitia"> | string | null
    createdAt?: DateTimeFilter<"Panitia"> | Date | string
    updatedAt?: DateTimeFilter<"Panitia"> | Date | string
    staff?: EmployeeListRelationFilter
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    PIC?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }

  export type PanitiaOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    staff?: EmployeeOrderByRelationAggregateInput
    event?: EventOrderByWithRelationInput
    PIC?: EmployeeOrderByWithRelationInput
    _relevance?: PanitiaOrderByRelevanceInput
  }

  export type PanitiaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PanitiaWhereInput | PanitiaWhereInput[]
    OR?: PanitiaWhereInput[]
    NOT?: PanitiaWhereInput | PanitiaWhereInput[]
    eventId?: StringFilter<"Panitia"> | string
    employeeId?: StringNullableFilter<"Panitia"> | string | null
    createdAt?: DateTimeFilter<"Panitia"> | Date | string
    updatedAt?: DateTimeFilter<"Panitia"> | Date | string
    staff?: EmployeeListRelationFilter
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    PIC?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }, "id">

  export type PanitiaOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PanitiaCountOrderByAggregateInput
    _max?: PanitiaMaxOrderByAggregateInput
    _min?: PanitiaMinOrderByAggregateInput
  }

  export type PanitiaScalarWhereWithAggregatesInput = {
    AND?: PanitiaScalarWhereWithAggregatesInput | PanitiaScalarWhereWithAggregatesInput[]
    OR?: PanitiaScalarWhereWithAggregatesInput[]
    NOT?: PanitiaScalarWhereWithAggregatesInput | PanitiaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Panitia"> | string
    eventId?: StringWithAggregatesFilter<"Panitia"> | string
    employeeId?: StringNullableWithAggregatesFilter<"Panitia"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Panitia"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Panitia"> | Date | string
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    id?: StringFilter<"File"> | string
    filename?: StringFilter<"File"> | string
    originalName?: StringFilter<"File"> | string
    path?: StringFilter<"File"> | string
    mimetype?: StringFilter<"File"> | string
    size?: IntFilter<"File"> | number
    extension?: StringFilter<"File"> | string
    description?: StringNullableFilter<"File"> | string | null
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
    deletedAt?: DateTimeNullableFilter<"File"> | Date | string | null
    notulensiId?: StringNullableFilter<"File"> | string | null
    pesertaId?: StringNullableFilter<"File"> | string | null
    notulensi?: XOR<NotulensiNullableScalarRelationFilter, NotulensiWhereInput> | null
    Peserta?: XOR<PesertaNullableScalarRelationFilter, PesertaWhereInput> | null
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    path?: SortOrder
    mimetype?: SortOrder
    size?: SortOrder
    extension?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    notulensiId?: SortOrderInput | SortOrder
    pesertaId?: SortOrderInput | SortOrder
    notulensi?: NotulensiOrderByWithRelationInput
    Peserta?: PesertaOrderByWithRelationInput
    _relevance?: FileOrderByRelevanceInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pesertaId?: string
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    filename?: StringFilter<"File"> | string
    originalName?: StringFilter<"File"> | string
    path?: StringFilter<"File"> | string
    mimetype?: StringFilter<"File"> | string
    size?: IntFilter<"File"> | number
    extension?: StringFilter<"File"> | string
    description?: StringNullableFilter<"File"> | string | null
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
    deletedAt?: DateTimeNullableFilter<"File"> | Date | string | null
    notulensiId?: StringNullableFilter<"File"> | string | null
    notulensi?: XOR<NotulensiNullableScalarRelationFilter, NotulensiWhereInput> | null
    Peserta?: XOR<PesertaNullableScalarRelationFilter, PesertaWhereInput> | null
  }, "id" | "pesertaId">

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    path?: SortOrder
    mimetype?: SortOrder
    size?: SortOrder
    extension?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    notulensiId?: SortOrderInput | SortOrder
    pesertaId?: SortOrderInput | SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"File"> | string
    filename?: StringWithAggregatesFilter<"File"> | string
    originalName?: StringWithAggregatesFilter<"File"> | string
    path?: StringWithAggregatesFilter<"File"> | string
    mimetype?: StringWithAggregatesFilter<"File"> | string
    size?: IntWithAggregatesFilter<"File"> | number
    extension?: StringWithAggregatesFilter<"File"> | string
    description?: StringNullableWithAggregatesFilter<"File"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"File"> | Date | string | null
    notulensiId?: StringNullableWithAggregatesFilter<"File"> | string | null
    pesertaId?: StringNullableWithAggregatesFilter<"File"> | string | null
  }

  export type SertifikasiWhereInput = {
    AND?: SertifikasiWhereInput | SertifikasiWhereInput[]
    OR?: SertifikasiWhereInput[]
    NOT?: SertifikasiWhereInput | SertifikasiWhereInput[]
    id?: StringFilter<"Sertifikasi"> | string
    name?: StringFilter<"Sertifikasi"> | string
    code?: StringFilter<"Sertifikasi"> | string
    Employee?: EmployeeListRelationFilter
    Peserta?: PesertaListRelationFilter
  }

  export type SertifikasiOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    Employee?: EmployeeOrderByRelationAggregateInput
    Peserta?: PesertaOrderByRelationAggregateInput
    _relevance?: SertifikasiOrderByRelevanceInput
  }

  export type SertifikasiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: SertifikasiWhereInput | SertifikasiWhereInput[]
    OR?: SertifikasiWhereInput[]
    NOT?: SertifikasiWhereInput | SertifikasiWhereInput[]
    name?: StringFilter<"Sertifikasi"> | string
    Employee?: EmployeeListRelationFilter
    Peserta?: PesertaListRelationFilter
  }, "id" | "code">

  export type SertifikasiOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    _count?: SertifikasiCountOrderByAggregateInput
    _max?: SertifikasiMaxOrderByAggregateInput
    _min?: SertifikasiMinOrderByAggregateInput
  }

  export type SertifikasiScalarWhereWithAggregatesInput = {
    AND?: SertifikasiScalarWhereWithAggregatesInput | SertifikasiScalarWhereWithAggregatesInput[]
    OR?: SertifikasiScalarWhereWithAggregatesInput[]
    NOT?: SertifikasiScalarWhereWithAggregatesInput | SertifikasiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sertifikasi"> | string
    name?: StringWithAggregatesFilter<"Sertifikasi"> | string
    code?: StringWithAggregatesFilter<"Sertifikasi"> | string
  }

  export type VendorWhereInput = {
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    id?: StringFilter<"Vendor"> | string
    name?: StringFilter<"Vendor"> | string
    email?: StringNullableFilter<"Vendor"> | string | null
    phone?: StringNullableFilter<"Vendor"> | string | null
    address?: StringNullableFilter<"Vendor"> | string | null
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Vendor"> | Date | string | null
  }

  export type VendorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _relevance?: VendorOrderByRelevanceInput
  }

  export type VendorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    name?: StringFilter<"Vendor"> | string
    email?: StringNullableFilter<"Vendor"> | string | null
    phone?: StringNullableFilter<"Vendor"> | string | null
    address?: StringNullableFilter<"Vendor"> | string | null
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Vendor"> | Date | string | null
  }, "id">

  export type VendorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: VendorCountOrderByAggregateInput
    _max?: VendorMaxOrderByAggregateInput
    _min?: VendorMinOrderByAggregateInput
  }

  export type VendorScalarWhereWithAggregatesInput = {
    AND?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    OR?: VendorScalarWhereWithAggregatesInput[]
    NOT?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vendor"> | string
    name?: StringWithAggregatesFilter<"Vendor"> | string
    email?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    address?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Vendor"> | Date | string | null
  }

  export type AssetWhereInput = {
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    id?: StringFilter<"Asset"> | string
    vendorId?: StringNullableFilter<"Asset"> | string | null
    name?: StringFilter<"Asset"> | string
    description?: StringNullableFilter<"Asset"> | string | null
    checkInDate?: DateTimeNullableFilter<"Asset"> | Date | string | null
    checkOutDate?: DateTimeNullableFilter<"Asset"> | Date | string | null
    expiredAt?: DateTimeNullableFilter<"Asset"> | Date | string | null
    condition?: StringNullableFilter<"Asset"> | string | null
    location?: StringNullableFilter<"Asset"> | string | null
    price?: IntNullableFilter<"Asset"> | number | null
    satuan?: StringNullableFilter<"Asset"> | string | null
    qty?: IntNullableFilter<"Asset"> | number | null
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Asset"> | Date | string | null
  }

  export type AssetOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    checkInDate?: SortOrderInput | SortOrder
    checkOutDate?: SortOrderInput | SortOrder
    expiredAt?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    satuan?: SortOrderInput | SortOrder
    qty?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _relevance?: AssetOrderByRelevanceInput
  }

  export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    vendorId?: StringNullableFilter<"Asset"> | string | null
    name?: StringFilter<"Asset"> | string
    description?: StringNullableFilter<"Asset"> | string | null
    checkInDate?: DateTimeNullableFilter<"Asset"> | Date | string | null
    checkOutDate?: DateTimeNullableFilter<"Asset"> | Date | string | null
    expiredAt?: DateTimeNullableFilter<"Asset"> | Date | string | null
    condition?: StringNullableFilter<"Asset"> | string | null
    location?: StringNullableFilter<"Asset"> | string | null
    price?: IntNullableFilter<"Asset"> | number | null
    satuan?: StringNullableFilter<"Asset"> | string | null
    qty?: IntNullableFilter<"Asset"> | number | null
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Asset"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Asset"> | Date | string | null
  }, "id">

  export type AssetOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    checkInDate?: SortOrderInput | SortOrder
    checkOutDate?: SortOrderInput | SortOrder
    expiredAt?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    satuan?: SortOrderInput | SortOrder
    qty?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AssetCountOrderByAggregateInput
    _avg?: AssetAvgOrderByAggregateInput
    _max?: AssetMaxOrderByAggregateInput
    _min?: AssetMinOrderByAggregateInput
    _sum?: AssetSumOrderByAggregateInput
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    OR?: AssetScalarWhereWithAggregatesInput[]
    NOT?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Asset"> | string
    vendorId?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    name?: StringWithAggregatesFilter<"Asset"> | string
    description?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    checkInDate?: DateTimeNullableWithAggregatesFilter<"Asset"> | Date | string | null
    checkOutDate?: DateTimeNullableWithAggregatesFilter<"Asset"> | Date | string | null
    expiredAt?: DateTimeNullableWithAggregatesFilter<"Asset"> | Date | string | null
    condition?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    location?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    price?: IntNullableWithAggregatesFilter<"Asset"> | number | null
    satuan?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    qty?: IntNullableWithAggregatesFilter<"Asset"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Asset"> | Date | string | null
  }

  export type AssetHistoryWhereInput = {
    AND?: AssetHistoryWhereInput | AssetHistoryWhereInput[]
    OR?: AssetHistoryWhereInput[]
    NOT?: AssetHistoryWhereInput | AssetHistoryWhereInput[]
    id?: StringFilter<"AssetHistory"> | string
    assetName?: StringNullableFilter<"AssetHistory"> | string | null
    status?: StringNullableFilter<"AssetHistory"> | string | null
    checkInDate?: DateTimeNullableFilter<"AssetHistory"> | Date | string | null
    checkOutDate?: DateTimeNullableFilter<"AssetHistory"> | Date | string | null
    distributor?: StringNullableFilter<"AssetHistory"> | string | null
    qty?: IntNullableFilter<"AssetHistory"> | number | null
    createdAt?: DateTimeFilter<"AssetHistory"> | Date | string
    updatedAt?: DateTimeFilter<"AssetHistory"> | Date | string
    deletedAt?: DateTimeNullableFilter<"AssetHistory"> | Date | string | null
  }

  export type AssetHistoryOrderByWithRelationInput = {
    id?: SortOrder
    assetName?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    checkInDate?: SortOrderInput | SortOrder
    checkOutDate?: SortOrderInput | SortOrder
    distributor?: SortOrderInput | SortOrder
    qty?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _relevance?: AssetHistoryOrderByRelevanceInput
  }

  export type AssetHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssetHistoryWhereInput | AssetHistoryWhereInput[]
    OR?: AssetHistoryWhereInput[]
    NOT?: AssetHistoryWhereInput | AssetHistoryWhereInput[]
    assetName?: StringNullableFilter<"AssetHistory"> | string | null
    status?: StringNullableFilter<"AssetHistory"> | string | null
    checkInDate?: DateTimeNullableFilter<"AssetHistory"> | Date | string | null
    checkOutDate?: DateTimeNullableFilter<"AssetHistory"> | Date | string | null
    distributor?: StringNullableFilter<"AssetHistory"> | string | null
    qty?: IntNullableFilter<"AssetHistory"> | number | null
    createdAt?: DateTimeFilter<"AssetHistory"> | Date | string
    updatedAt?: DateTimeFilter<"AssetHistory"> | Date | string
    deletedAt?: DateTimeNullableFilter<"AssetHistory"> | Date | string | null
  }, "id">

  export type AssetHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    assetName?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    checkInDate?: SortOrderInput | SortOrder
    checkOutDate?: SortOrderInput | SortOrder
    distributor?: SortOrderInput | SortOrder
    qty?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AssetHistoryCountOrderByAggregateInput
    _avg?: AssetHistoryAvgOrderByAggregateInput
    _max?: AssetHistoryMaxOrderByAggregateInput
    _min?: AssetHistoryMinOrderByAggregateInput
    _sum?: AssetHistorySumOrderByAggregateInput
  }

  export type AssetHistoryScalarWhereWithAggregatesInput = {
    AND?: AssetHistoryScalarWhereWithAggregatesInput | AssetHistoryScalarWhereWithAggregatesInput[]
    OR?: AssetHistoryScalarWhereWithAggregatesInput[]
    NOT?: AssetHistoryScalarWhereWithAggregatesInput | AssetHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssetHistory"> | string
    assetName?: StringNullableWithAggregatesFilter<"AssetHistory"> | string | null
    status?: StringNullableWithAggregatesFilter<"AssetHistory"> | string | null
    checkInDate?: DateTimeNullableWithAggregatesFilter<"AssetHistory"> | Date | string | null
    checkOutDate?: DateTimeNullableWithAggregatesFilter<"AssetHistory"> | Date | string | null
    distributor?: StringNullableWithAggregatesFilter<"AssetHistory"> | string | null
    qty?: IntNullableWithAggregatesFilter<"AssetHistory"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"AssetHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AssetHistory"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"AssetHistory"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    salt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    salt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    salt: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: string | null
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Event?: EventCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: string | null
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Event?: EventUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Event?: EventUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Event?: EventUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type ProgramCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    status?: string | null
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProgramUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProgramUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventCreateInput = {
    id?: string
    notulensiId?: string | null
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    harga?: number | null
    tempat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    peserta?: PesertaCreateNestedManyWithoutEventInput
    notulensi?: NotulensiCreateNestedManyWithoutEventInput
    program: ProgramCreateNestedOneWithoutEventInput
    JenisEvent?: JenisEventCreateNestedOneWithoutEventInput
    Panitia?: PanitiaCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    programId: string
    jenisEventId?: string | null
    notulensiId?: string | null
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    harga?: number | null
    tempat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    peserta?: PesertaUncheckedCreateNestedManyWithoutEventInput
    notulensi?: NotulensiUncheckedCreateNestedManyWithoutEventInput
    Panitia?: PanitiaUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    notulensiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peserta?: PesertaUpdateManyWithoutEventNestedInput
    notulensi?: NotulensiUpdateManyWithoutEventNestedInput
    program?: ProgramUpdateOneRequiredWithoutEventNestedInput
    JenisEvent?: JenisEventUpdateOneWithoutEventNestedInput
    Panitia?: PanitiaUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    jenisEventId?: NullableStringFieldUpdateOperationsInput | string | null
    notulensiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peserta?: PesertaUncheckedUpdateManyWithoutEventNestedInput
    notulensi?: NotulensiUncheckedUpdateManyWithoutEventNestedInput
    Panitia?: PanitiaUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    programId: string
    jenisEventId?: string | null
    notulensiId?: string | null
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    harga?: number | null
    tempat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    notulensiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    jenisEventId?: NullableStringFieldUpdateOperationsInput | string | null
    notulensiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JenisEventCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Event?: EventCreateNestedManyWithoutJenisEventInput
  }

  export type JenisEventUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Event?: EventUncheckedCreateNestedManyWithoutJenisEventInput
  }

  export type JenisEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Event?: EventUpdateManyWithoutJenisEventNestedInput
  }

  export type JenisEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Event?: EventUncheckedUpdateManyWithoutJenisEventNestedInput
  }

  export type JenisEventCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type JenisEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JenisEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotulensiCreateInput = {
    id?: string
    name: string
    tanggal: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    File?: FileCreateNestedManyWithoutNotulensiInput
    Event: EventCreateNestedOneWithoutNotulensiInput
  }

  export type NotulensiUncheckedCreateInput = {
    id?: string
    eventId: string
    name: string
    tanggal: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    File?: FileUncheckedCreateNestedManyWithoutNotulensiInput
  }

  export type NotulensiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    File?: FileUpdateManyWithoutNotulensiNestedInput
    Event?: EventUpdateOneRequiredWithoutNotulensiNestedInput
  }

  export type NotulensiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    File?: FileUncheckedUpdateManyWithoutNotulensiNestedInput
  }

  export type NotulensiCreateManyInput = {
    id?: string
    eventId: string
    name: string
    tanggal: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type NotulensiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotulensiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PesertaCreateInput = {
    id?: string
    provider?: string
    providerId?: string | null
    nim?: string | null
    name: string
    email: string
    phone?: string | null
    status?: string | null
    balance?: number | null
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sertifikat?: FileCreateNestedOneWithoutPesertaInput
    sertifikasiTerdaftar?: SertifikasiCreateNestedManyWithoutPesertaInput
    Event?: EventCreateNestedManyWithoutPesertaInput
  }

  export type PesertaUncheckedCreateInput = {
    id?: string
    provider?: string
    providerId?: string | null
    nim?: string | null
    name: string
    email: string
    phone?: string | null
    status?: string | null
    balance?: number | null
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sertifikat?: FileUncheckedCreateNestedOneWithoutPesertaInput
    sertifikasiTerdaftar?: SertifikasiUncheckedCreateNestedManyWithoutPesertaInput
    Event?: EventUncheckedCreateNestedManyWithoutPesertaInput
  }

  export type PesertaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sertifikat?: FileUpdateOneWithoutPesertaNestedInput
    sertifikasiTerdaftar?: SertifikasiUpdateManyWithoutPesertaNestedInput
    Event?: EventUpdateManyWithoutPesertaNestedInput
  }

  export type PesertaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sertifikat?: FileUncheckedUpdateOneWithoutPesertaNestedInput
    sertifikasiTerdaftar?: SertifikasiUncheckedUpdateManyWithoutPesertaNestedInput
    Event?: EventUncheckedUpdateManyWithoutPesertaNestedInput
  }

  export type PesertaCreateManyInput = {
    id?: string
    provider?: string
    providerId?: string | null
    nim?: string | null
    name: string
    email: string
    phone?: string | null
    status?: string | null
    balance?: number | null
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PesertaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PesertaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeeCreateInput = {
    id?: string
    name: string
    NIP?: string | null
    email: string
    phone?: string | null
    NPWP?: string | null
    namaBank?: string | null
    noRek?: string | null
    status?: string | null
    notifikasi?: string | null
    jabatan?: string | null
    unit?: string | null
    role?: $Enums.EmployeeRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sertifikasi?: SertifikasiCreateNestedOneWithoutEmployeeInput
    staff?: PanitiaCreateNestedManyWithoutStaffInput
    PIC?: PanitiaCreateNestedManyWithoutPICInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    sertifikasiId?: string | null
    name: string
    NIP?: string | null
    email: string
    phone?: string | null
    NPWP?: string | null
    namaBank?: string | null
    noRek?: string | null
    status?: string | null
    notifikasi?: string | null
    jabatan?: string | null
    unit?: string | null
    role?: $Enums.EmployeeRole
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: PanitiaUncheckedCreateNestedManyWithoutStaffInput
    PIC?: PanitiaUncheckedCreateNestedManyWithoutPICInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    NIP?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    NPWP?: NullableStringFieldUpdateOperationsInput | string | null
    namaBank?: NullableStringFieldUpdateOperationsInput | string | null
    noRek?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sertifikasi?: SertifikasiUpdateOneWithoutEmployeeNestedInput
    staff?: PanitiaUpdateManyWithoutStaffNestedInput
    PIC?: PanitiaUpdateManyWithoutPICNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sertifikasiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    NIP?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    NPWP?: NullableStringFieldUpdateOperationsInput | string | null
    namaBank?: NullableStringFieldUpdateOperationsInput | string | null
    noRek?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: PanitiaUncheckedUpdateManyWithoutStaffNestedInput
    PIC?: PanitiaUncheckedUpdateManyWithoutPICNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    sertifikasiId?: string | null
    name: string
    NIP?: string | null
    email: string
    phone?: string | null
    NPWP?: string | null
    namaBank?: string | null
    noRek?: string | null
    status?: string | null
    notifikasi?: string | null
    jabatan?: string | null
    unit?: string | null
    role?: $Enums.EmployeeRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    NIP?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    NPWP?: NullableStringFieldUpdateOperationsInput | string | null
    namaBank?: NullableStringFieldUpdateOperationsInput | string | null
    noRek?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sertifikasiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    NIP?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    NPWP?: NullableStringFieldUpdateOperationsInput | string | null
    namaBank?: NullableStringFieldUpdateOperationsInput | string | null
    noRek?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanitiaCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: EmployeeCreateNestedManyWithoutStaffInput
    event: EventCreateNestedOneWithoutPanitiaInput
    PIC?: EmployeeCreateNestedOneWithoutPICInput
  }

  export type PanitiaUncheckedCreateInput = {
    id?: string
    eventId: string
    employeeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: EmployeeUncheckedCreateNestedManyWithoutStaffInput
  }

  export type PanitiaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: EmployeeUpdateManyWithoutStaffNestedInput
    event?: EventUpdateOneRequiredWithoutPanitiaNestedInput
    PIC?: EmployeeUpdateOneWithoutPICNestedInput
  }

  export type PanitiaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: EmployeeUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type PanitiaCreateManyInput = {
    id?: string
    eventId: string
    employeeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PanitiaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanitiaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateInput = {
    id?: string
    filename: string
    originalName: string
    path: string
    mimetype: string
    size: number
    extension: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    notulensi?: NotulensiCreateNestedOneWithoutFileInput
    Peserta?: PesertaCreateNestedOneWithoutSertifikatInput
  }

  export type FileUncheckedCreateInput = {
    id?: string
    filename: string
    originalName: string
    path: string
    mimetype: string
    size: number
    extension: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    notulensiId?: string | null
    pesertaId?: string | null
  }

  export type FileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    extension?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notulensi?: NotulensiUpdateOneWithoutFileNestedInput
    Peserta?: PesertaUpdateOneWithoutSertifikatNestedInput
  }

  export type FileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    extension?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notulensiId?: NullableStringFieldUpdateOperationsInput | string | null
    pesertaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FileCreateManyInput = {
    id?: string
    filename: string
    originalName: string
    path: string
    mimetype: string
    size: number
    extension: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    notulensiId?: string | null
    pesertaId?: string | null
  }

  export type FileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    extension?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    extension?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notulensiId?: NullableStringFieldUpdateOperationsInput | string | null
    pesertaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SertifikasiCreateInput = {
    id?: string
    name: string
    code: string
    Employee?: EmployeeCreateNestedManyWithoutSertifikasiInput
    Peserta?: PesertaCreateNestedManyWithoutSertifikasiTerdaftarInput
  }

  export type SertifikasiUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    Employee?: EmployeeUncheckedCreateNestedManyWithoutSertifikasiInput
    Peserta?: PesertaUncheckedCreateNestedManyWithoutSertifikasiTerdaftarInput
  }

  export type SertifikasiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    Employee?: EmployeeUpdateManyWithoutSertifikasiNestedInput
    Peserta?: PesertaUpdateManyWithoutSertifikasiTerdaftarNestedInput
  }

  export type SertifikasiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    Employee?: EmployeeUncheckedUpdateManyWithoutSertifikasiNestedInput
    Peserta?: PesertaUncheckedUpdateManyWithoutSertifikasiTerdaftarNestedInput
  }

  export type SertifikasiCreateManyInput = {
    id?: string
    name: string
    code: string
  }

  export type SertifikasiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type SertifikasiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type VendorCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type VendorUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type VendorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VendorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VendorCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type VendorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VendorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssetCreateInput = {
    id?: string
    vendorId?: string | null
    name: string
    description?: string | null
    checkInDate?: Date | string | null
    checkOutDate?: Date | string | null
    expiredAt?: Date | string | null
    condition?: string | null
    location?: string | null
    price?: number | null
    satuan?: string | null
    qty?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AssetUncheckedCreateInput = {
    id?: string
    vendorId?: string | null
    name: string
    description?: string | null
    checkInDate?: Date | string | null
    checkOutDate?: Date | string | null
    expiredAt?: Date | string | null
    condition?: string | null
    location?: string | null
    price?: number | null
    satuan?: string | null
    qty?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    satuan?: NullableStringFieldUpdateOperationsInput | string | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    satuan?: NullableStringFieldUpdateOperationsInput | string | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssetCreateManyInput = {
    id?: string
    vendorId?: string | null
    name: string
    description?: string | null
    checkInDate?: Date | string | null
    checkOutDate?: Date | string | null
    expiredAt?: Date | string | null
    condition?: string | null
    location?: string | null
    price?: number | null
    satuan?: string | null
    qty?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    satuan?: NullableStringFieldUpdateOperationsInput | string | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    satuan?: NullableStringFieldUpdateOperationsInput | string | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssetHistoryCreateInput = {
    id?: string
    assetName?: string | null
    status?: string | null
    checkInDate?: Date | string | null
    checkOutDate?: Date | string | null
    distributor?: string | null
    qty?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AssetHistoryUncheckedCreateInput = {
    id?: string
    assetName?: string | null
    status?: string | null
    checkInDate?: Date | string | null
    checkOutDate?: Date | string | null
    distributor?: string | null
    qty?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AssetHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distributor?: NullableStringFieldUpdateOperationsInput | string | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssetHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distributor?: NullableStringFieldUpdateOperationsInput | string | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssetHistoryCreateManyInput = {
    id?: string
    assetName?: string | null
    status?: string | null
    checkInDate?: Date | string | null
    checkOutDate?: Date | string | null
    distributor?: string | null
    qty?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AssetHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distributor?: NullableStringFieldUpdateOperationsInput | string | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssetHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    checkInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distributor?: NullableStringFieldUpdateOperationsInput | string | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgramOrderByRelevanceInput = {
    fields: ProgramOrderByRelevanceFieldEnum | ProgramOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProgramCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProgramMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PesertaListRelationFilter = {
    every?: PesertaWhereInput
    some?: PesertaWhereInput
    none?: PesertaWhereInput
  }

  export type NotulensiListRelationFilter = {
    every?: NotulensiWhereInput
    some?: NotulensiWhereInput
    none?: NotulensiWhereInput
  }

  export type ProgramScalarRelationFilter = {
    is?: ProgramWhereInput
    isNot?: ProgramWhereInput
  }

  export type JenisEventNullableScalarRelationFilter = {
    is?: JenisEventWhereInput | null
    isNot?: JenisEventWhereInput | null
  }

  export type PanitiaListRelationFilter = {
    every?: PanitiaWhereInput
    some?: PanitiaWhereInput
    none?: PanitiaWhereInput
  }

  export type PesertaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotulensiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PanitiaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelevanceInput = {
    fields: EventOrderByRelevanceFieldEnum | EventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    jenisEventId?: SortOrder
    notulensiId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    harga?: SortOrder
    tempat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    harga?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    jenisEventId?: SortOrder
    notulensiId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    harga?: SortOrder
    tempat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    jenisEventId?: SortOrder
    notulensiId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    harga?: SortOrder
    tempat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    harga?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type JenisEventOrderByRelevanceInput = {
    fields: JenisEventOrderByRelevanceFieldEnum | JenisEventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JenisEventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type JenisEventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type JenisEventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type FileListRelationFilter = {
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type FileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotulensiOrderByRelevanceInput = {
    fields: NotulensiOrderByRelevanceFieldEnum | NotulensiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotulensiCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    tanggal?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type NotulensiMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    tanggal?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type NotulensiMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    tanggal?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type FileNullableScalarRelationFilter = {
    is?: FileWhereInput | null
    isNot?: FileWhereInput | null
  }

  export type SertifikasiListRelationFilter = {
    every?: SertifikasiWhereInput
    some?: SertifikasiWhereInput
    none?: SertifikasiWhereInput
  }

  export type SertifikasiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PesertaOrderByRelevanceInput = {
    fields: PesertaOrderByRelevanceFieldEnum | PesertaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PesertaCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    nim?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    balance?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PesertaAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type PesertaMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    nim?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    balance?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PesertaMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    nim?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    balance?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PesertaSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type EnumEmployeeRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeRole | EnumEmployeeRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeRole[]
    notIn?: $Enums.EmployeeRole[]
    not?: NestedEnumEmployeeRoleFilter<$PrismaModel> | $Enums.EmployeeRole
  }

  export type SertifikasiNullableScalarRelationFilter = {
    is?: SertifikasiWhereInput | null
    isNot?: SertifikasiWhereInput | null
  }

  export type EmployeeOrderByRelevanceInput = {
    fields: EmployeeOrderByRelevanceFieldEnum | EmployeeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    sertifikasiId?: SortOrder
    name?: SortOrder
    NIP?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    NPWP?: SortOrder
    namaBank?: SortOrder
    noRek?: SortOrder
    status?: SortOrder
    notifikasi?: SortOrder
    jabatan?: SortOrder
    unit?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    sertifikasiId?: SortOrder
    name?: SortOrder
    NIP?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    NPWP?: SortOrder
    namaBank?: SortOrder
    noRek?: SortOrder
    status?: SortOrder
    notifikasi?: SortOrder
    jabatan?: SortOrder
    unit?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    sertifikasiId?: SortOrder
    name?: SortOrder
    NIP?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    NPWP?: SortOrder
    namaBank?: SortOrder
    noRek?: SortOrder
    status?: SortOrder
    notifikasi?: SortOrder
    jabatan?: SortOrder
    unit?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEmployeeRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeRole | EnumEmployeeRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeRole[]
    notIn?: $Enums.EmployeeRole[]
    not?: NestedEnumEmployeeRoleWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeRoleFilter<$PrismaModel>
    _max?: NestedEnumEmployeeRoleFilter<$PrismaModel>
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PanitiaOrderByRelevanceInput = {
    fields: PanitiaOrderByRelevanceFieldEnum | PanitiaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PanitiaCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PanitiaMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PanitiaMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NotulensiNullableScalarRelationFilter = {
    is?: NotulensiWhereInput | null
    isNot?: NotulensiWhereInput | null
  }

  export type PesertaNullableScalarRelationFilter = {
    is?: PesertaWhereInput | null
    isNot?: PesertaWhereInput | null
  }

  export type FileOrderByRelevanceInput = {
    fields: FileOrderByRelevanceFieldEnum | FileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    path?: SortOrder
    mimetype?: SortOrder
    size?: SortOrder
    extension?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    notulensiId?: SortOrder
    pesertaId?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    path?: SortOrder
    mimetype?: SortOrder
    size?: SortOrder
    extension?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    notulensiId?: SortOrder
    pesertaId?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    path?: SortOrder
    mimetype?: SortOrder
    size?: SortOrder
    extension?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    notulensiId?: SortOrder
    pesertaId?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SertifikasiOrderByRelevanceInput = {
    fields: SertifikasiOrderByRelevanceFieldEnum | SertifikasiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SertifikasiCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type SertifikasiMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type SertifikasiMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type VendorOrderByRelevanceInput = {
    fields: VendorOrderByRelevanceFieldEnum | VendorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VendorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type VendorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type VendorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AssetOrderByRelevanceInput = {
    fields: AssetOrderByRelevanceFieldEnum | AssetOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AssetCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    expiredAt?: SortOrder
    condition?: SortOrder
    location?: SortOrder
    price?: SortOrder
    satuan?: SortOrder
    qty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AssetAvgOrderByAggregateInput = {
    price?: SortOrder
    qty?: SortOrder
  }

  export type AssetMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    expiredAt?: SortOrder
    condition?: SortOrder
    location?: SortOrder
    price?: SortOrder
    satuan?: SortOrder
    qty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AssetMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    expiredAt?: SortOrder
    condition?: SortOrder
    location?: SortOrder
    price?: SortOrder
    satuan?: SortOrder
    qty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AssetSumOrderByAggregateInput = {
    price?: SortOrder
    qty?: SortOrder
  }

  export type AssetHistoryOrderByRelevanceInput = {
    fields: AssetHistoryOrderByRelevanceFieldEnum | AssetHistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AssetHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    assetName?: SortOrder
    status?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    distributor?: SortOrder
    qty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AssetHistoryAvgOrderByAggregateInput = {
    qty?: SortOrder
  }

  export type AssetHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    assetName?: SortOrder
    status?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    distributor?: SortOrder
    qty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AssetHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    assetName?: SortOrder
    status?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    distributor?: SortOrder
    qty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AssetHistorySumOrderByAggregateInput = {
    qty?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventCreateNestedManyWithoutProgramInput = {
    create?: XOR<EventCreateWithoutProgramInput, EventUncheckedCreateWithoutProgramInput> | EventCreateWithoutProgramInput[] | EventUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: EventCreateOrConnectWithoutProgramInput | EventCreateOrConnectWithoutProgramInput[]
    createMany?: EventCreateManyProgramInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutProgramInput = {
    create?: XOR<EventCreateWithoutProgramInput, EventUncheckedCreateWithoutProgramInput> | EventCreateWithoutProgramInput[] | EventUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: EventCreateOrConnectWithoutProgramInput | EventCreateOrConnectWithoutProgramInput[]
    createMany?: EventCreateManyProgramInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EventUpdateManyWithoutProgramNestedInput = {
    create?: XOR<EventCreateWithoutProgramInput, EventUncheckedCreateWithoutProgramInput> | EventCreateWithoutProgramInput[] | EventUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: EventCreateOrConnectWithoutProgramInput | EventCreateOrConnectWithoutProgramInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutProgramInput | EventUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: EventCreateManyProgramInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutProgramInput | EventUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: EventUpdateManyWithWhereWithoutProgramInput | EventUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: XOR<EventCreateWithoutProgramInput, EventUncheckedCreateWithoutProgramInput> | EventCreateWithoutProgramInput[] | EventUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: EventCreateOrConnectWithoutProgramInput | EventCreateOrConnectWithoutProgramInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutProgramInput | EventUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: EventCreateManyProgramInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutProgramInput | EventUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: EventUpdateManyWithWhereWithoutProgramInput | EventUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type PesertaCreateNestedManyWithoutEventInput = {
    create?: XOR<PesertaCreateWithoutEventInput, PesertaUncheckedCreateWithoutEventInput> | PesertaCreateWithoutEventInput[] | PesertaUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PesertaCreateOrConnectWithoutEventInput | PesertaCreateOrConnectWithoutEventInput[]
    connect?: PesertaWhereUniqueInput | PesertaWhereUniqueInput[]
  }

  export type NotulensiCreateNestedManyWithoutEventInput = {
    create?: XOR<NotulensiCreateWithoutEventInput, NotulensiUncheckedCreateWithoutEventInput> | NotulensiCreateWithoutEventInput[] | NotulensiUncheckedCreateWithoutEventInput[]
    connectOrCreate?: NotulensiCreateOrConnectWithoutEventInput | NotulensiCreateOrConnectWithoutEventInput[]
    createMany?: NotulensiCreateManyEventInputEnvelope
    connect?: NotulensiWhereUniqueInput | NotulensiWhereUniqueInput[]
  }

  export type ProgramCreateNestedOneWithoutEventInput = {
    create?: XOR<ProgramCreateWithoutEventInput, ProgramUncheckedCreateWithoutEventInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutEventInput
    connect?: ProgramWhereUniqueInput
  }

  export type JenisEventCreateNestedOneWithoutEventInput = {
    create?: XOR<JenisEventCreateWithoutEventInput, JenisEventUncheckedCreateWithoutEventInput>
    connectOrCreate?: JenisEventCreateOrConnectWithoutEventInput
    connect?: JenisEventWhereUniqueInput
  }

  export type PanitiaCreateNestedManyWithoutEventInput = {
    create?: XOR<PanitiaCreateWithoutEventInput, PanitiaUncheckedCreateWithoutEventInput> | PanitiaCreateWithoutEventInput[] | PanitiaUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PanitiaCreateOrConnectWithoutEventInput | PanitiaCreateOrConnectWithoutEventInput[]
    createMany?: PanitiaCreateManyEventInputEnvelope
    connect?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
  }

  export type PesertaUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<PesertaCreateWithoutEventInput, PesertaUncheckedCreateWithoutEventInput> | PesertaCreateWithoutEventInput[] | PesertaUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PesertaCreateOrConnectWithoutEventInput | PesertaCreateOrConnectWithoutEventInput[]
    connect?: PesertaWhereUniqueInput | PesertaWhereUniqueInput[]
  }

  export type NotulensiUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<NotulensiCreateWithoutEventInput, NotulensiUncheckedCreateWithoutEventInput> | NotulensiCreateWithoutEventInput[] | NotulensiUncheckedCreateWithoutEventInput[]
    connectOrCreate?: NotulensiCreateOrConnectWithoutEventInput | NotulensiCreateOrConnectWithoutEventInput[]
    createMany?: NotulensiCreateManyEventInputEnvelope
    connect?: NotulensiWhereUniqueInput | NotulensiWhereUniqueInput[]
  }

  export type PanitiaUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<PanitiaCreateWithoutEventInput, PanitiaUncheckedCreateWithoutEventInput> | PanitiaCreateWithoutEventInput[] | PanitiaUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PanitiaCreateOrConnectWithoutEventInput | PanitiaCreateOrConnectWithoutEventInput[]
    createMany?: PanitiaCreateManyEventInputEnvelope
    connect?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PesertaUpdateManyWithoutEventNestedInput = {
    create?: XOR<PesertaCreateWithoutEventInput, PesertaUncheckedCreateWithoutEventInput> | PesertaCreateWithoutEventInput[] | PesertaUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PesertaCreateOrConnectWithoutEventInput | PesertaCreateOrConnectWithoutEventInput[]
    upsert?: PesertaUpsertWithWhereUniqueWithoutEventInput | PesertaUpsertWithWhereUniqueWithoutEventInput[]
    set?: PesertaWhereUniqueInput | PesertaWhereUniqueInput[]
    disconnect?: PesertaWhereUniqueInput | PesertaWhereUniqueInput[]
    delete?: PesertaWhereUniqueInput | PesertaWhereUniqueInput[]
    connect?: PesertaWhereUniqueInput | PesertaWhereUniqueInput[]
    update?: PesertaUpdateWithWhereUniqueWithoutEventInput | PesertaUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: PesertaUpdateManyWithWhereWithoutEventInput | PesertaUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: PesertaScalarWhereInput | PesertaScalarWhereInput[]
  }

  export type NotulensiUpdateManyWithoutEventNestedInput = {
    create?: XOR<NotulensiCreateWithoutEventInput, NotulensiUncheckedCreateWithoutEventInput> | NotulensiCreateWithoutEventInput[] | NotulensiUncheckedCreateWithoutEventInput[]
    connectOrCreate?: NotulensiCreateOrConnectWithoutEventInput | NotulensiCreateOrConnectWithoutEventInput[]
    upsert?: NotulensiUpsertWithWhereUniqueWithoutEventInput | NotulensiUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: NotulensiCreateManyEventInputEnvelope
    set?: NotulensiWhereUniqueInput | NotulensiWhereUniqueInput[]
    disconnect?: NotulensiWhereUniqueInput | NotulensiWhereUniqueInput[]
    delete?: NotulensiWhereUniqueInput | NotulensiWhereUniqueInput[]
    connect?: NotulensiWhereUniqueInput | NotulensiWhereUniqueInput[]
    update?: NotulensiUpdateWithWhereUniqueWithoutEventInput | NotulensiUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: NotulensiUpdateManyWithWhereWithoutEventInput | NotulensiUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: NotulensiScalarWhereInput | NotulensiScalarWhereInput[]
  }

  export type ProgramUpdateOneRequiredWithoutEventNestedInput = {
    create?: XOR<ProgramCreateWithoutEventInput, ProgramUncheckedCreateWithoutEventInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutEventInput
    upsert?: ProgramUpsertWithoutEventInput
    connect?: ProgramWhereUniqueInput
    update?: XOR<XOR<ProgramUpdateToOneWithWhereWithoutEventInput, ProgramUpdateWithoutEventInput>, ProgramUncheckedUpdateWithoutEventInput>
  }

  export type JenisEventUpdateOneWithoutEventNestedInput = {
    create?: XOR<JenisEventCreateWithoutEventInput, JenisEventUncheckedCreateWithoutEventInput>
    connectOrCreate?: JenisEventCreateOrConnectWithoutEventInput
    upsert?: JenisEventUpsertWithoutEventInput
    disconnect?: JenisEventWhereInput | boolean
    delete?: JenisEventWhereInput | boolean
    connect?: JenisEventWhereUniqueInput
    update?: XOR<XOR<JenisEventUpdateToOneWithWhereWithoutEventInput, JenisEventUpdateWithoutEventInput>, JenisEventUncheckedUpdateWithoutEventInput>
  }

  export type PanitiaUpdateManyWithoutEventNestedInput = {
    create?: XOR<PanitiaCreateWithoutEventInput, PanitiaUncheckedCreateWithoutEventInput> | PanitiaCreateWithoutEventInput[] | PanitiaUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PanitiaCreateOrConnectWithoutEventInput | PanitiaCreateOrConnectWithoutEventInput[]
    upsert?: PanitiaUpsertWithWhereUniqueWithoutEventInput | PanitiaUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: PanitiaCreateManyEventInputEnvelope
    set?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    disconnect?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    delete?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    connect?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    update?: PanitiaUpdateWithWhereUniqueWithoutEventInput | PanitiaUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: PanitiaUpdateManyWithWhereWithoutEventInput | PanitiaUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: PanitiaScalarWhereInput | PanitiaScalarWhereInput[]
  }

  export type PesertaUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<PesertaCreateWithoutEventInput, PesertaUncheckedCreateWithoutEventInput> | PesertaCreateWithoutEventInput[] | PesertaUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PesertaCreateOrConnectWithoutEventInput | PesertaCreateOrConnectWithoutEventInput[]
    upsert?: PesertaUpsertWithWhereUniqueWithoutEventInput | PesertaUpsertWithWhereUniqueWithoutEventInput[]
    set?: PesertaWhereUniqueInput | PesertaWhereUniqueInput[]
    disconnect?: PesertaWhereUniqueInput | PesertaWhereUniqueInput[]
    delete?: PesertaWhereUniqueInput | PesertaWhereUniqueInput[]
    connect?: PesertaWhereUniqueInput | PesertaWhereUniqueInput[]
    update?: PesertaUpdateWithWhereUniqueWithoutEventInput | PesertaUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: PesertaUpdateManyWithWhereWithoutEventInput | PesertaUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: PesertaScalarWhereInput | PesertaScalarWhereInput[]
  }

  export type NotulensiUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<NotulensiCreateWithoutEventInput, NotulensiUncheckedCreateWithoutEventInput> | NotulensiCreateWithoutEventInput[] | NotulensiUncheckedCreateWithoutEventInput[]
    connectOrCreate?: NotulensiCreateOrConnectWithoutEventInput | NotulensiCreateOrConnectWithoutEventInput[]
    upsert?: NotulensiUpsertWithWhereUniqueWithoutEventInput | NotulensiUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: NotulensiCreateManyEventInputEnvelope
    set?: NotulensiWhereUniqueInput | NotulensiWhereUniqueInput[]
    disconnect?: NotulensiWhereUniqueInput | NotulensiWhereUniqueInput[]
    delete?: NotulensiWhereUniqueInput | NotulensiWhereUniqueInput[]
    connect?: NotulensiWhereUniqueInput | NotulensiWhereUniqueInput[]
    update?: NotulensiUpdateWithWhereUniqueWithoutEventInput | NotulensiUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: NotulensiUpdateManyWithWhereWithoutEventInput | NotulensiUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: NotulensiScalarWhereInput | NotulensiScalarWhereInput[]
  }

  export type PanitiaUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<PanitiaCreateWithoutEventInput, PanitiaUncheckedCreateWithoutEventInput> | PanitiaCreateWithoutEventInput[] | PanitiaUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PanitiaCreateOrConnectWithoutEventInput | PanitiaCreateOrConnectWithoutEventInput[]
    upsert?: PanitiaUpsertWithWhereUniqueWithoutEventInput | PanitiaUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: PanitiaCreateManyEventInputEnvelope
    set?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    disconnect?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    delete?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    connect?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    update?: PanitiaUpdateWithWhereUniqueWithoutEventInput | PanitiaUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: PanitiaUpdateManyWithWhereWithoutEventInput | PanitiaUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: PanitiaScalarWhereInput | PanitiaScalarWhereInput[]
  }

  export type EventCreateNestedManyWithoutJenisEventInput = {
    create?: XOR<EventCreateWithoutJenisEventInput, EventUncheckedCreateWithoutJenisEventInput> | EventCreateWithoutJenisEventInput[] | EventUncheckedCreateWithoutJenisEventInput[]
    connectOrCreate?: EventCreateOrConnectWithoutJenisEventInput | EventCreateOrConnectWithoutJenisEventInput[]
    createMany?: EventCreateManyJenisEventInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutJenisEventInput = {
    create?: XOR<EventCreateWithoutJenisEventInput, EventUncheckedCreateWithoutJenisEventInput> | EventCreateWithoutJenisEventInput[] | EventUncheckedCreateWithoutJenisEventInput[]
    connectOrCreate?: EventCreateOrConnectWithoutJenisEventInput | EventCreateOrConnectWithoutJenisEventInput[]
    createMany?: EventCreateManyJenisEventInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUpdateManyWithoutJenisEventNestedInput = {
    create?: XOR<EventCreateWithoutJenisEventInput, EventUncheckedCreateWithoutJenisEventInput> | EventCreateWithoutJenisEventInput[] | EventUncheckedCreateWithoutJenisEventInput[]
    connectOrCreate?: EventCreateOrConnectWithoutJenisEventInput | EventCreateOrConnectWithoutJenisEventInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutJenisEventInput | EventUpsertWithWhereUniqueWithoutJenisEventInput[]
    createMany?: EventCreateManyJenisEventInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutJenisEventInput | EventUpdateWithWhereUniqueWithoutJenisEventInput[]
    updateMany?: EventUpdateManyWithWhereWithoutJenisEventInput | EventUpdateManyWithWhereWithoutJenisEventInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutJenisEventNestedInput = {
    create?: XOR<EventCreateWithoutJenisEventInput, EventUncheckedCreateWithoutJenisEventInput> | EventCreateWithoutJenisEventInput[] | EventUncheckedCreateWithoutJenisEventInput[]
    connectOrCreate?: EventCreateOrConnectWithoutJenisEventInput | EventCreateOrConnectWithoutJenisEventInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutJenisEventInput | EventUpsertWithWhereUniqueWithoutJenisEventInput[]
    createMany?: EventCreateManyJenisEventInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutJenisEventInput | EventUpdateWithWhereUniqueWithoutJenisEventInput[]
    updateMany?: EventUpdateManyWithWhereWithoutJenisEventInput | EventUpdateManyWithWhereWithoutJenisEventInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type FileCreateNestedManyWithoutNotulensiInput = {
    create?: XOR<FileCreateWithoutNotulensiInput, FileUncheckedCreateWithoutNotulensiInput> | FileCreateWithoutNotulensiInput[] | FileUncheckedCreateWithoutNotulensiInput[]
    connectOrCreate?: FileCreateOrConnectWithoutNotulensiInput | FileCreateOrConnectWithoutNotulensiInput[]
    createMany?: FileCreateManyNotulensiInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type EventCreateNestedOneWithoutNotulensiInput = {
    create?: XOR<EventCreateWithoutNotulensiInput, EventUncheckedCreateWithoutNotulensiInput>
    connectOrCreate?: EventCreateOrConnectWithoutNotulensiInput
    connect?: EventWhereUniqueInput
  }

  export type FileUncheckedCreateNestedManyWithoutNotulensiInput = {
    create?: XOR<FileCreateWithoutNotulensiInput, FileUncheckedCreateWithoutNotulensiInput> | FileCreateWithoutNotulensiInput[] | FileUncheckedCreateWithoutNotulensiInput[]
    connectOrCreate?: FileCreateOrConnectWithoutNotulensiInput | FileCreateOrConnectWithoutNotulensiInput[]
    createMany?: FileCreateManyNotulensiInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type FileUpdateManyWithoutNotulensiNestedInput = {
    create?: XOR<FileCreateWithoutNotulensiInput, FileUncheckedCreateWithoutNotulensiInput> | FileCreateWithoutNotulensiInput[] | FileUncheckedCreateWithoutNotulensiInput[]
    connectOrCreate?: FileCreateOrConnectWithoutNotulensiInput | FileCreateOrConnectWithoutNotulensiInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutNotulensiInput | FileUpsertWithWhereUniqueWithoutNotulensiInput[]
    createMany?: FileCreateManyNotulensiInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutNotulensiInput | FileUpdateWithWhereUniqueWithoutNotulensiInput[]
    updateMany?: FileUpdateManyWithWhereWithoutNotulensiInput | FileUpdateManyWithWhereWithoutNotulensiInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type EventUpdateOneRequiredWithoutNotulensiNestedInput = {
    create?: XOR<EventCreateWithoutNotulensiInput, EventUncheckedCreateWithoutNotulensiInput>
    connectOrCreate?: EventCreateOrConnectWithoutNotulensiInput
    upsert?: EventUpsertWithoutNotulensiInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutNotulensiInput, EventUpdateWithoutNotulensiInput>, EventUncheckedUpdateWithoutNotulensiInput>
  }

  export type FileUncheckedUpdateManyWithoutNotulensiNestedInput = {
    create?: XOR<FileCreateWithoutNotulensiInput, FileUncheckedCreateWithoutNotulensiInput> | FileCreateWithoutNotulensiInput[] | FileUncheckedCreateWithoutNotulensiInput[]
    connectOrCreate?: FileCreateOrConnectWithoutNotulensiInput | FileCreateOrConnectWithoutNotulensiInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutNotulensiInput | FileUpsertWithWhereUniqueWithoutNotulensiInput[]
    createMany?: FileCreateManyNotulensiInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutNotulensiInput | FileUpdateWithWhereUniqueWithoutNotulensiInput[]
    updateMany?: FileUpdateManyWithWhereWithoutNotulensiInput | FileUpdateManyWithWhereWithoutNotulensiInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type FileCreateNestedOneWithoutPesertaInput = {
    create?: XOR<FileCreateWithoutPesertaInput, FileUncheckedCreateWithoutPesertaInput>
    connectOrCreate?: FileCreateOrConnectWithoutPesertaInput
    connect?: FileWhereUniqueInput
  }

  export type SertifikasiCreateNestedManyWithoutPesertaInput = {
    create?: XOR<SertifikasiCreateWithoutPesertaInput, SertifikasiUncheckedCreateWithoutPesertaInput> | SertifikasiCreateWithoutPesertaInput[] | SertifikasiUncheckedCreateWithoutPesertaInput[]
    connectOrCreate?: SertifikasiCreateOrConnectWithoutPesertaInput | SertifikasiCreateOrConnectWithoutPesertaInput[]
    connect?: SertifikasiWhereUniqueInput | SertifikasiWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutPesertaInput = {
    create?: XOR<EventCreateWithoutPesertaInput, EventUncheckedCreateWithoutPesertaInput> | EventCreateWithoutPesertaInput[] | EventUncheckedCreateWithoutPesertaInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPesertaInput | EventCreateOrConnectWithoutPesertaInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedOneWithoutPesertaInput = {
    create?: XOR<FileCreateWithoutPesertaInput, FileUncheckedCreateWithoutPesertaInput>
    connectOrCreate?: FileCreateOrConnectWithoutPesertaInput
    connect?: FileWhereUniqueInput
  }

  export type SertifikasiUncheckedCreateNestedManyWithoutPesertaInput = {
    create?: XOR<SertifikasiCreateWithoutPesertaInput, SertifikasiUncheckedCreateWithoutPesertaInput> | SertifikasiCreateWithoutPesertaInput[] | SertifikasiUncheckedCreateWithoutPesertaInput[]
    connectOrCreate?: SertifikasiCreateOrConnectWithoutPesertaInput | SertifikasiCreateOrConnectWithoutPesertaInput[]
    connect?: SertifikasiWhereUniqueInput | SertifikasiWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutPesertaInput = {
    create?: XOR<EventCreateWithoutPesertaInput, EventUncheckedCreateWithoutPesertaInput> | EventCreateWithoutPesertaInput[] | EventUncheckedCreateWithoutPesertaInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPesertaInput | EventCreateOrConnectWithoutPesertaInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type FileUpdateOneWithoutPesertaNestedInput = {
    create?: XOR<FileCreateWithoutPesertaInput, FileUncheckedCreateWithoutPesertaInput>
    connectOrCreate?: FileCreateOrConnectWithoutPesertaInput
    upsert?: FileUpsertWithoutPesertaInput
    disconnect?: FileWhereInput | boolean
    delete?: FileWhereInput | boolean
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutPesertaInput, FileUpdateWithoutPesertaInput>, FileUncheckedUpdateWithoutPesertaInput>
  }

  export type SertifikasiUpdateManyWithoutPesertaNestedInput = {
    create?: XOR<SertifikasiCreateWithoutPesertaInput, SertifikasiUncheckedCreateWithoutPesertaInput> | SertifikasiCreateWithoutPesertaInput[] | SertifikasiUncheckedCreateWithoutPesertaInput[]
    connectOrCreate?: SertifikasiCreateOrConnectWithoutPesertaInput | SertifikasiCreateOrConnectWithoutPesertaInput[]
    upsert?: SertifikasiUpsertWithWhereUniqueWithoutPesertaInput | SertifikasiUpsertWithWhereUniqueWithoutPesertaInput[]
    set?: SertifikasiWhereUniqueInput | SertifikasiWhereUniqueInput[]
    disconnect?: SertifikasiWhereUniqueInput | SertifikasiWhereUniqueInput[]
    delete?: SertifikasiWhereUniqueInput | SertifikasiWhereUniqueInput[]
    connect?: SertifikasiWhereUniqueInput | SertifikasiWhereUniqueInput[]
    update?: SertifikasiUpdateWithWhereUniqueWithoutPesertaInput | SertifikasiUpdateWithWhereUniqueWithoutPesertaInput[]
    updateMany?: SertifikasiUpdateManyWithWhereWithoutPesertaInput | SertifikasiUpdateManyWithWhereWithoutPesertaInput[]
    deleteMany?: SertifikasiScalarWhereInput | SertifikasiScalarWhereInput[]
  }

  export type EventUpdateManyWithoutPesertaNestedInput = {
    create?: XOR<EventCreateWithoutPesertaInput, EventUncheckedCreateWithoutPesertaInput> | EventCreateWithoutPesertaInput[] | EventUncheckedCreateWithoutPesertaInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPesertaInput | EventCreateOrConnectWithoutPesertaInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutPesertaInput | EventUpsertWithWhereUniqueWithoutPesertaInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutPesertaInput | EventUpdateWithWhereUniqueWithoutPesertaInput[]
    updateMany?: EventUpdateManyWithWhereWithoutPesertaInput | EventUpdateManyWithWhereWithoutPesertaInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type FileUncheckedUpdateOneWithoutPesertaNestedInput = {
    create?: XOR<FileCreateWithoutPesertaInput, FileUncheckedCreateWithoutPesertaInput>
    connectOrCreate?: FileCreateOrConnectWithoutPesertaInput
    upsert?: FileUpsertWithoutPesertaInput
    disconnect?: FileWhereInput | boolean
    delete?: FileWhereInput | boolean
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutPesertaInput, FileUpdateWithoutPesertaInput>, FileUncheckedUpdateWithoutPesertaInput>
  }

  export type SertifikasiUncheckedUpdateManyWithoutPesertaNestedInput = {
    create?: XOR<SertifikasiCreateWithoutPesertaInput, SertifikasiUncheckedCreateWithoutPesertaInput> | SertifikasiCreateWithoutPesertaInput[] | SertifikasiUncheckedCreateWithoutPesertaInput[]
    connectOrCreate?: SertifikasiCreateOrConnectWithoutPesertaInput | SertifikasiCreateOrConnectWithoutPesertaInput[]
    upsert?: SertifikasiUpsertWithWhereUniqueWithoutPesertaInput | SertifikasiUpsertWithWhereUniqueWithoutPesertaInput[]
    set?: SertifikasiWhereUniqueInput | SertifikasiWhereUniqueInput[]
    disconnect?: SertifikasiWhereUniqueInput | SertifikasiWhereUniqueInput[]
    delete?: SertifikasiWhereUniqueInput | SertifikasiWhereUniqueInput[]
    connect?: SertifikasiWhereUniqueInput | SertifikasiWhereUniqueInput[]
    update?: SertifikasiUpdateWithWhereUniqueWithoutPesertaInput | SertifikasiUpdateWithWhereUniqueWithoutPesertaInput[]
    updateMany?: SertifikasiUpdateManyWithWhereWithoutPesertaInput | SertifikasiUpdateManyWithWhereWithoutPesertaInput[]
    deleteMany?: SertifikasiScalarWhereInput | SertifikasiScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutPesertaNestedInput = {
    create?: XOR<EventCreateWithoutPesertaInput, EventUncheckedCreateWithoutPesertaInput> | EventCreateWithoutPesertaInput[] | EventUncheckedCreateWithoutPesertaInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPesertaInput | EventCreateOrConnectWithoutPesertaInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutPesertaInput | EventUpsertWithWhereUniqueWithoutPesertaInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutPesertaInput | EventUpdateWithWhereUniqueWithoutPesertaInput[]
    updateMany?: EventUpdateManyWithWhereWithoutPesertaInput | EventUpdateManyWithWhereWithoutPesertaInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type SertifikasiCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<SertifikasiCreateWithoutEmployeeInput, SertifikasiUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: SertifikasiCreateOrConnectWithoutEmployeeInput
    connect?: SertifikasiWhereUniqueInput
  }

  export type PanitiaCreateNestedManyWithoutStaffInput = {
    create?: XOR<PanitiaCreateWithoutStaffInput, PanitiaUncheckedCreateWithoutStaffInput> | PanitiaCreateWithoutStaffInput[] | PanitiaUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: PanitiaCreateOrConnectWithoutStaffInput | PanitiaCreateOrConnectWithoutStaffInput[]
    connect?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
  }

  export type PanitiaCreateNestedManyWithoutPICInput = {
    create?: XOR<PanitiaCreateWithoutPICInput, PanitiaUncheckedCreateWithoutPICInput> | PanitiaCreateWithoutPICInput[] | PanitiaUncheckedCreateWithoutPICInput[]
    connectOrCreate?: PanitiaCreateOrConnectWithoutPICInput | PanitiaCreateOrConnectWithoutPICInput[]
    createMany?: PanitiaCreateManyPICInputEnvelope
    connect?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
  }

  export type PanitiaUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<PanitiaCreateWithoutStaffInput, PanitiaUncheckedCreateWithoutStaffInput> | PanitiaCreateWithoutStaffInput[] | PanitiaUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: PanitiaCreateOrConnectWithoutStaffInput | PanitiaCreateOrConnectWithoutStaffInput[]
    connect?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
  }

  export type PanitiaUncheckedCreateNestedManyWithoutPICInput = {
    create?: XOR<PanitiaCreateWithoutPICInput, PanitiaUncheckedCreateWithoutPICInput> | PanitiaCreateWithoutPICInput[] | PanitiaUncheckedCreateWithoutPICInput[]
    connectOrCreate?: PanitiaCreateOrConnectWithoutPICInput | PanitiaCreateOrConnectWithoutPICInput[]
    createMany?: PanitiaCreateManyPICInputEnvelope
    connect?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
  }

  export type EnumEmployeeRoleFieldUpdateOperationsInput = {
    set?: $Enums.EmployeeRole
  }

  export type SertifikasiUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<SertifikasiCreateWithoutEmployeeInput, SertifikasiUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: SertifikasiCreateOrConnectWithoutEmployeeInput
    upsert?: SertifikasiUpsertWithoutEmployeeInput
    disconnect?: SertifikasiWhereInput | boolean
    delete?: SertifikasiWhereInput | boolean
    connect?: SertifikasiWhereUniqueInput
    update?: XOR<XOR<SertifikasiUpdateToOneWithWhereWithoutEmployeeInput, SertifikasiUpdateWithoutEmployeeInput>, SertifikasiUncheckedUpdateWithoutEmployeeInput>
  }

  export type PanitiaUpdateManyWithoutStaffNestedInput = {
    create?: XOR<PanitiaCreateWithoutStaffInput, PanitiaUncheckedCreateWithoutStaffInput> | PanitiaCreateWithoutStaffInput[] | PanitiaUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: PanitiaCreateOrConnectWithoutStaffInput | PanitiaCreateOrConnectWithoutStaffInput[]
    upsert?: PanitiaUpsertWithWhereUniqueWithoutStaffInput | PanitiaUpsertWithWhereUniqueWithoutStaffInput[]
    set?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    disconnect?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    delete?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    connect?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    update?: PanitiaUpdateWithWhereUniqueWithoutStaffInput | PanitiaUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: PanitiaUpdateManyWithWhereWithoutStaffInput | PanitiaUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: PanitiaScalarWhereInput | PanitiaScalarWhereInput[]
  }

  export type PanitiaUpdateManyWithoutPICNestedInput = {
    create?: XOR<PanitiaCreateWithoutPICInput, PanitiaUncheckedCreateWithoutPICInput> | PanitiaCreateWithoutPICInput[] | PanitiaUncheckedCreateWithoutPICInput[]
    connectOrCreate?: PanitiaCreateOrConnectWithoutPICInput | PanitiaCreateOrConnectWithoutPICInput[]
    upsert?: PanitiaUpsertWithWhereUniqueWithoutPICInput | PanitiaUpsertWithWhereUniqueWithoutPICInput[]
    createMany?: PanitiaCreateManyPICInputEnvelope
    set?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    disconnect?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    delete?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    connect?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    update?: PanitiaUpdateWithWhereUniqueWithoutPICInput | PanitiaUpdateWithWhereUniqueWithoutPICInput[]
    updateMany?: PanitiaUpdateManyWithWhereWithoutPICInput | PanitiaUpdateManyWithWhereWithoutPICInput[]
    deleteMany?: PanitiaScalarWhereInput | PanitiaScalarWhereInput[]
  }

  export type PanitiaUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<PanitiaCreateWithoutStaffInput, PanitiaUncheckedCreateWithoutStaffInput> | PanitiaCreateWithoutStaffInput[] | PanitiaUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: PanitiaCreateOrConnectWithoutStaffInput | PanitiaCreateOrConnectWithoutStaffInput[]
    upsert?: PanitiaUpsertWithWhereUniqueWithoutStaffInput | PanitiaUpsertWithWhereUniqueWithoutStaffInput[]
    set?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    disconnect?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    delete?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    connect?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    update?: PanitiaUpdateWithWhereUniqueWithoutStaffInput | PanitiaUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: PanitiaUpdateManyWithWhereWithoutStaffInput | PanitiaUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: PanitiaScalarWhereInput | PanitiaScalarWhereInput[]
  }

  export type PanitiaUncheckedUpdateManyWithoutPICNestedInput = {
    create?: XOR<PanitiaCreateWithoutPICInput, PanitiaUncheckedCreateWithoutPICInput> | PanitiaCreateWithoutPICInput[] | PanitiaUncheckedCreateWithoutPICInput[]
    connectOrCreate?: PanitiaCreateOrConnectWithoutPICInput | PanitiaCreateOrConnectWithoutPICInput[]
    upsert?: PanitiaUpsertWithWhereUniqueWithoutPICInput | PanitiaUpsertWithWhereUniqueWithoutPICInput[]
    createMany?: PanitiaCreateManyPICInputEnvelope
    set?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    disconnect?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    delete?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    connect?: PanitiaWhereUniqueInput | PanitiaWhereUniqueInput[]
    update?: PanitiaUpdateWithWhereUniqueWithoutPICInput | PanitiaUpdateWithWhereUniqueWithoutPICInput[]
    updateMany?: PanitiaUpdateManyWithWhereWithoutPICInput | PanitiaUpdateManyWithWhereWithoutPICInput[]
    deleteMany?: PanitiaScalarWhereInput | PanitiaScalarWhereInput[]
  }

  export type EmployeeCreateNestedManyWithoutStaffInput = {
    create?: XOR<EmployeeCreateWithoutStaffInput, EmployeeUncheckedCreateWithoutStaffInput> | EmployeeCreateWithoutStaffInput[] | EmployeeUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutStaffInput | EmployeeCreateOrConnectWithoutStaffInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EventCreateNestedOneWithoutPanitiaInput = {
    create?: XOR<EventCreateWithoutPanitiaInput, EventUncheckedCreateWithoutPanitiaInput>
    connectOrCreate?: EventCreateOrConnectWithoutPanitiaInput
    connect?: EventWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutPICInput = {
    create?: XOR<EmployeeCreateWithoutPICInput, EmployeeUncheckedCreateWithoutPICInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPICInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<EmployeeCreateWithoutStaffInput, EmployeeUncheckedCreateWithoutStaffInput> | EmployeeCreateWithoutStaffInput[] | EmployeeUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutStaffInput | EmployeeCreateOrConnectWithoutStaffInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUpdateManyWithoutStaffNestedInput = {
    create?: XOR<EmployeeCreateWithoutStaffInput, EmployeeUncheckedCreateWithoutStaffInput> | EmployeeCreateWithoutStaffInput[] | EmployeeUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutStaffInput | EmployeeCreateOrConnectWithoutStaffInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutStaffInput | EmployeeUpsertWithWhereUniqueWithoutStaffInput[]
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutStaffInput | EmployeeUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutStaffInput | EmployeeUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EventUpdateOneRequiredWithoutPanitiaNestedInput = {
    create?: XOR<EventCreateWithoutPanitiaInput, EventUncheckedCreateWithoutPanitiaInput>
    connectOrCreate?: EventCreateOrConnectWithoutPanitiaInput
    upsert?: EventUpsertWithoutPanitiaInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutPanitiaInput, EventUpdateWithoutPanitiaInput>, EventUncheckedUpdateWithoutPanitiaInput>
  }

  export type EmployeeUpdateOneWithoutPICNestedInput = {
    create?: XOR<EmployeeCreateWithoutPICInput, EmployeeUncheckedCreateWithoutPICInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPICInput
    upsert?: EmployeeUpsertWithoutPICInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutPICInput, EmployeeUpdateWithoutPICInput>, EmployeeUncheckedUpdateWithoutPICInput>
  }

  export type EmployeeUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<EmployeeCreateWithoutStaffInput, EmployeeUncheckedCreateWithoutStaffInput> | EmployeeCreateWithoutStaffInput[] | EmployeeUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutStaffInput | EmployeeCreateOrConnectWithoutStaffInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutStaffInput | EmployeeUpsertWithWhereUniqueWithoutStaffInput[]
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutStaffInput | EmployeeUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutStaffInput | EmployeeUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type NotulensiCreateNestedOneWithoutFileInput = {
    create?: XOR<NotulensiCreateWithoutFileInput, NotulensiUncheckedCreateWithoutFileInput>
    connectOrCreate?: NotulensiCreateOrConnectWithoutFileInput
    connect?: NotulensiWhereUniqueInput
  }

  export type PesertaCreateNestedOneWithoutSertifikatInput = {
    create?: XOR<PesertaCreateWithoutSertifikatInput, PesertaUncheckedCreateWithoutSertifikatInput>
    connectOrCreate?: PesertaCreateOrConnectWithoutSertifikatInput
    connect?: PesertaWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NotulensiUpdateOneWithoutFileNestedInput = {
    create?: XOR<NotulensiCreateWithoutFileInput, NotulensiUncheckedCreateWithoutFileInput>
    connectOrCreate?: NotulensiCreateOrConnectWithoutFileInput
    upsert?: NotulensiUpsertWithoutFileInput
    disconnect?: NotulensiWhereInput | boolean
    delete?: NotulensiWhereInput | boolean
    connect?: NotulensiWhereUniqueInput
    update?: XOR<XOR<NotulensiUpdateToOneWithWhereWithoutFileInput, NotulensiUpdateWithoutFileInput>, NotulensiUncheckedUpdateWithoutFileInput>
  }

  export type PesertaUpdateOneWithoutSertifikatNestedInput = {
    create?: XOR<PesertaCreateWithoutSertifikatInput, PesertaUncheckedCreateWithoutSertifikatInput>
    connectOrCreate?: PesertaCreateOrConnectWithoutSertifikatInput
    upsert?: PesertaUpsertWithoutSertifikatInput
    disconnect?: PesertaWhereInput | boolean
    delete?: PesertaWhereInput | boolean
    connect?: PesertaWhereUniqueInput
    update?: XOR<XOR<PesertaUpdateToOneWithWhereWithoutSertifikatInput, PesertaUpdateWithoutSertifikatInput>, PesertaUncheckedUpdateWithoutSertifikatInput>
  }

  export type EmployeeCreateNestedManyWithoutSertifikasiInput = {
    create?: XOR<EmployeeCreateWithoutSertifikasiInput, EmployeeUncheckedCreateWithoutSertifikasiInput> | EmployeeCreateWithoutSertifikasiInput[] | EmployeeUncheckedCreateWithoutSertifikasiInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutSertifikasiInput | EmployeeCreateOrConnectWithoutSertifikasiInput[]
    createMany?: EmployeeCreateManySertifikasiInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type PesertaCreateNestedManyWithoutSertifikasiTerdaftarInput = {
    create?: XOR<PesertaCreateWithoutSertifikasiTerdaftarInput, PesertaUncheckedCreateWithoutSertifikasiTerdaftarInput> | PesertaCreateWithoutSertifikasiTerdaftarInput[] | PesertaUncheckedCreateWithoutSertifikasiTerdaftarInput[]
    connectOrCreate?: PesertaCreateOrConnectWithoutSertifikasiTerdaftarInput | PesertaCreateOrConnectWithoutSertifikasiTerdaftarInput[]
    connect?: PesertaWhereUniqueInput | PesertaWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutSertifikasiInput = {
    create?: XOR<EmployeeCreateWithoutSertifikasiInput, EmployeeUncheckedCreateWithoutSertifikasiInput> | EmployeeCreateWithoutSertifikasiInput[] | EmployeeUncheckedCreateWithoutSertifikasiInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutSertifikasiInput | EmployeeCreateOrConnectWithoutSertifikasiInput[]
    createMany?: EmployeeCreateManySertifikasiInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type PesertaUncheckedCreateNestedManyWithoutSertifikasiTerdaftarInput = {
    create?: XOR<PesertaCreateWithoutSertifikasiTerdaftarInput, PesertaUncheckedCreateWithoutSertifikasiTerdaftarInput> | PesertaCreateWithoutSertifikasiTerdaftarInput[] | PesertaUncheckedCreateWithoutSertifikasiTerdaftarInput[]
    connectOrCreate?: PesertaCreateOrConnectWithoutSertifikasiTerdaftarInput | PesertaCreateOrConnectWithoutSertifikasiTerdaftarInput[]
    connect?: PesertaWhereUniqueInput | PesertaWhereUniqueInput[]
  }

  export type EmployeeUpdateManyWithoutSertifikasiNestedInput = {
    create?: XOR<EmployeeCreateWithoutSertifikasiInput, EmployeeUncheckedCreateWithoutSertifikasiInput> | EmployeeCreateWithoutSertifikasiInput[] | EmployeeUncheckedCreateWithoutSertifikasiInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutSertifikasiInput | EmployeeCreateOrConnectWithoutSertifikasiInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutSertifikasiInput | EmployeeUpsertWithWhereUniqueWithoutSertifikasiInput[]
    createMany?: EmployeeCreateManySertifikasiInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutSertifikasiInput | EmployeeUpdateWithWhereUniqueWithoutSertifikasiInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutSertifikasiInput | EmployeeUpdateManyWithWhereWithoutSertifikasiInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type PesertaUpdateManyWithoutSertifikasiTerdaftarNestedInput = {
    create?: XOR<PesertaCreateWithoutSertifikasiTerdaftarInput, PesertaUncheckedCreateWithoutSertifikasiTerdaftarInput> | PesertaCreateWithoutSertifikasiTerdaftarInput[] | PesertaUncheckedCreateWithoutSertifikasiTerdaftarInput[]
    connectOrCreate?: PesertaCreateOrConnectWithoutSertifikasiTerdaftarInput | PesertaCreateOrConnectWithoutSertifikasiTerdaftarInput[]
    upsert?: PesertaUpsertWithWhereUniqueWithoutSertifikasiTerdaftarInput | PesertaUpsertWithWhereUniqueWithoutSertifikasiTerdaftarInput[]
    set?: PesertaWhereUniqueInput | PesertaWhereUniqueInput[]
    disconnect?: PesertaWhereUniqueInput | PesertaWhereUniqueInput[]
    delete?: PesertaWhereUniqueInput | PesertaWhereUniqueInput[]
    connect?: PesertaWhereUniqueInput | PesertaWhereUniqueInput[]
    update?: PesertaUpdateWithWhereUniqueWithoutSertifikasiTerdaftarInput | PesertaUpdateWithWhereUniqueWithoutSertifikasiTerdaftarInput[]
    updateMany?: PesertaUpdateManyWithWhereWithoutSertifikasiTerdaftarInput | PesertaUpdateManyWithWhereWithoutSertifikasiTerdaftarInput[]
    deleteMany?: PesertaScalarWhereInput | PesertaScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutSertifikasiNestedInput = {
    create?: XOR<EmployeeCreateWithoutSertifikasiInput, EmployeeUncheckedCreateWithoutSertifikasiInput> | EmployeeCreateWithoutSertifikasiInput[] | EmployeeUncheckedCreateWithoutSertifikasiInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutSertifikasiInput | EmployeeCreateOrConnectWithoutSertifikasiInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutSertifikasiInput | EmployeeUpsertWithWhereUniqueWithoutSertifikasiInput[]
    createMany?: EmployeeCreateManySertifikasiInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutSertifikasiInput | EmployeeUpdateWithWhereUniqueWithoutSertifikasiInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutSertifikasiInput | EmployeeUpdateManyWithWhereWithoutSertifikasiInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type PesertaUncheckedUpdateManyWithoutSertifikasiTerdaftarNestedInput = {
    create?: XOR<PesertaCreateWithoutSertifikasiTerdaftarInput, PesertaUncheckedCreateWithoutSertifikasiTerdaftarInput> | PesertaCreateWithoutSertifikasiTerdaftarInput[] | PesertaUncheckedCreateWithoutSertifikasiTerdaftarInput[]
    connectOrCreate?: PesertaCreateOrConnectWithoutSertifikasiTerdaftarInput | PesertaCreateOrConnectWithoutSertifikasiTerdaftarInput[]
    upsert?: PesertaUpsertWithWhereUniqueWithoutSertifikasiTerdaftarInput | PesertaUpsertWithWhereUniqueWithoutSertifikasiTerdaftarInput[]
    set?: PesertaWhereUniqueInput | PesertaWhereUniqueInput[]
    disconnect?: PesertaWhereUniqueInput | PesertaWhereUniqueInput[]
    delete?: PesertaWhereUniqueInput | PesertaWhereUniqueInput[]
    connect?: PesertaWhereUniqueInput | PesertaWhereUniqueInput[]
    update?: PesertaUpdateWithWhereUniqueWithoutSertifikasiTerdaftarInput | PesertaUpdateWithWhereUniqueWithoutSertifikasiTerdaftarInput[]
    updateMany?: PesertaUpdateManyWithWhereWithoutSertifikasiTerdaftarInput | PesertaUpdateManyWithWhereWithoutSertifikasiTerdaftarInput[]
    deleteMany?: PesertaScalarWhereInput | PesertaScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEmployeeRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeRole | EnumEmployeeRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeRole[]
    notIn?: $Enums.EmployeeRole[]
    not?: NestedEnumEmployeeRoleFilter<$PrismaModel> | $Enums.EmployeeRole
  }

  export type NestedEnumEmployeeRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeRole | EnumEmployeeRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeRole[]
    notIn?: $Enums.EmployeeRole[]
    not?: NestedEnumEmployeeRoleWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeRoleFilter<$PrismaModel>
    _max?: NestedEnumEmployeeRoleFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EventCreateWithoutProgramInput = {
    id?: string
    notulensiId?: string | null
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    harga?: number | null
    tempat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    peserta?: PesertaCreateNestedManyWithoutEventInput
    notulensi?: NotulensiCreateNestedManyWithoutEventInput
    JenisEvent?: JenisEventCreateNestedOneWithoutEventInput
    Panitia?: PanitiaCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutProgramInput = {
    id?: string
    jenisEventId?: string | null
    notulensiId?: string | null
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    harga?: number | null
    tempat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    peserta?: PesertaUncheckedCreateNestedManyWithoutEventInput
    notulensi?: NotulensiUncheckedCreateNestedManyWithoutEventInput
    Panitia?: PanitiaUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutProgramInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutProgramInput, EventUncheckedCreateWithoutProgramInput>
  }

  export type EventCreateManyProgramInputEnvelope = {
    data: EventCreateManyProgramInput | EventCreateManyProgramInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutProgramInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutProgramInput, EventUncheckedUpdateWithoutProgramInput>
    create: XOR<EventCreateWithoutProgramInput, EventUncheckedCreateWithoutProgramInput>
  }

  export type EventUpdateWithWhereUniqueWithoutProgramInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutProgramInput, EventUncheckedUpdateWithoutProgramInput>
  }

  export type EventUpdateManyWithWhereWithoutProgramInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutProgramInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    programId?: StringFilter<"Event"> | string
    jenisEventId?: StringNullableFilter<"Event"> | string | null
    notulensiId?: StringNullableFilter<"Event"> | string | null
    name?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    harga?: IntNullableFilter<"Event"> | number | null
    tempat?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
  }

  export type PesertaCreateWithoutEventInput = {
    id?: string
    provider?: string
    providerId?: string | null
    nim?: string | null
    name: string
    email: string
    phone?: string | null
    status?: string | null
    balance?: number | null
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sertifikat?: FileCreateNestedOneWithoutPesertaInput
    sertifikasiTerdaftar?: SertifikasiCreateNestedManyWithoutPesertaInput
  }

  export type PesertaUncheckedCreateWithoutEventInput = {
    id?: string
    provider?: string
    providerId?: string | null
    nim?: string | null
    name: string
    email: string
    phone?: string | null
    status?: string | null
    balance?: number | null
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sertifikat?: FileUncheckedCreateNestedOneWithoutPesertaInput
    sertifikasiTerdaftar?: SertifikasiUncheckedCreateNestedManyWithoutPesertaInput
  }

  export type PesertaCreateOrConnectWithoutEventInput = {
    where: PesertaWhereUniqueInput
    create: XOR<PesertaCreateWithoutEventInput, PesertaUncheckedCreateWithoutEventInput>
  }

  export type NotulensiCreateWithoutEventInput = {
    id?: string
    name: string
    tanggal: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    File?: FileCreateNestedManyWithoutNotulensiInput
  }

  export type NotulensiUncheckedCreateWithoutEventInput = {
    id?: string
    name: string
    tanggal: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    File?: FileUncheckedCreateNestedManyWithoutNotulensiInput
  }

  export type NotulensiCreateOrConnectWithoutEventInput = {
    where: NotulensiWhereUniqueInput
    create: XOR<NotulensiCreateWithoutEventInput, NotulensiUncheckedCreateWithoutEventInput>
  }

  export type NotulensiCreateManyEventInputEnvelope = {
    data: NotulensiCreateManyEventInput | NotulensiCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type ProgramCreateWithoutEventInput = {
    id?: string
    name: string
    description?: string | null
    status?: string | null
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProgramUncheckedCreateWithoutEventInput = {
    id?: string
    name: string
    description?: string | null
    status?: string | null
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProgramCreateOrConnectWithoutEventInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutEventInput, ProgramUncheckedCreateWithoutEventInput>
  }

  export type JenisEventCreateWithoutEventInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type JenisEventUncheckedCreateWithoutEventInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type JenisEventCreateOrConnectWithoutEventInput = {
    where: JenisEventWhereUniqueInput
    create: XOR<JenisEventCreateWithoutEventInput, JenisEventUncheckedCreateWithoutEventInput>
  }

  export type PanitiaCreateWithoutEventInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: EmployeeCreateNestedManyWithoutStaffInput
    PIC?: EmployeeCreateNestedOneWithoutPICInput
  }

  export type PanitiaUncheckedCreateWithoutEventInput = {
    id?: string
    employeeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: EmployeeUncheckedCreateNestedManyWithoutStaffInput
  }

  export type PanitiaCreateOrConnectWithoutEventInput = {
    where: PanitiaWhereUniqueInput
    create: XOR<PanitiaCreateWithoutEventInput, PanitiaUncheckedCreateWithoutEventInput>
  }

  export type PanitiaCreateManyEventInputEnvelope = {
    data: PanitiaCreateManyEventInput | PanitiaCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type PesertaUpsertWithWhereUniqueWithoutEventInput = {
    where: PesertaWhereUniqueInput
    update: XOR<PesertaUpdateWithoutEventInput, PesertaUncheckedUpdateWithoutEventInput>
    create: XOR<PesertaCreateWithoutEventInput, PesertaUncheckedCreateWithoutEventInput>
  }

  export type PesertaUpdateWithWhereUniqueWithoutEventInput = {
    where: PesertaWhereUniqueInput
    data: XOR<PesertaUpdateWithoutEventInput, PesertaUncheckedUpdateWithoutEventInput>
  }

  export type PesertaUpdateManyWithWhereWithoutEventInput = {
    where: PesertaScalarWhereInput
    data: XOR<PesertaUpdateManyMutationInput, PesertaUncheckedUpdateManyWithoutEventInput>
  }

  export type PesertaScalarWhereInput = {
    AND?: PesertaScalarWhereInput | PesertaScalarWhereInput[]
    OR?: PesertaScalarWhereInput[]
    NOT?: PesertaScalarWhereInput | PesertaScalarWhereInput[]
    id?: StringFilter<"Peserta"> | string
    provider?: StringFilter<"Peserta"> | string
    providerId?: StringNullableFilter<"Peserta"> | string | null
    nim?: StringNullableFilter<"Peserta"> | string | null
    name?: StringFilter<"Peserta"> | string
    email?: StringFilter<"Peserta"> | string
    phone?: StringNullableFilter<"Peserta"> | string | null
    status?: StringNullableFilter<"Peserta"> | string | null
    balance?: IntNullableFilter<"Peserta"> | number | null
    picture?: StringNullableFilter<"Peserta"> | string | null
    createdAt?: DateTimeFilter<"Peserta"> | Date | string
    updatedAt?: DateTimeFilter<"Peserta"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Peserta"> | Date | string | null
  }

  export type NotulensiUpsertWithWhereUniqueWithoutEventInput = {
    where: NotulensiWhereUniqueInput
    update: XOR<NotulensiUpdateWithoutEventInput, NotulensiUncheckedUpdateWithoutEventInput>
    create: XOR<NotulensiCreateWithoutEventInput, NotulensiUncheckedCreateWithoutEventInput>
  }

  export type NotulensiUpdateWithWhereUniqueWithoutEventInput = {
    where: NotulensiWhereUniqueInput
    data: XOR<NotulensiUpdateWithoutEventInput, NotulensiUncheckedUpdateWithoutEventInput>
  }

  export type NotulensiUpdateManyWithWhereWithoutEventInput = {
    where: NotulensiScalarWhereInput
    data: XOR<NotulensiUpdateManyMutationInput, NotulensiUncheckedUpdateManyWithoutEventInput>
  }

  export type NotulensiScalarWhereInput = {
    AND?: NotulensiScalarWhereInput | NotulensiScalarWhereInput[]
    OR?: NotulensiScalarWhereInput[]
    NOT?: NotulensiScalarWhereInput | NotulensiScalarWhereInput[]
    id?: StringFilter<"Notulensi"> | string
    eventId?: StringFilter<"Notulensi"> | string
    name?: StringFilter<"Notulensi"> | string
    tanggal?: DateTimeFilter<"Notulensi"> | Date | string
    description?: StringNullableFilter<"Notulensi"> | string | null
    createdAt?: DateTimeFilter<"Notulensi"> | Date | string
    updatedAt?: DateTimeFilter<"Notulensi"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Notulensi"> | Date | string | null
  }

  export type ProgramUpsertWithoutEventInput = {
    update: XOR<ProgramUpdateWithoutEventInput, ProgramUncheckedUpdateWithoutEventInput>
    create: XOR<ProgramCreateWithoutEventInput, ProgramUncheckedCreateWithoutEventInput>
    where?: ProgramWhereInput
  }

  export type ProgramUpdateToOneWithWhereWithoutEventInput = {
    where?: ProgramWhereInput
    data: XOR<ProgramUpdateWithoutEventInput, ProgramUncheckedUpdateWithoutEventInput>
  }

  export type ProgramUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProgramUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JenisEventUpsertWithoutEventInput = {
    update: XOR<JenisEventUpdateWithoutEventInput, JenisEventUncheckedUpdateWithoutEventInput>
    create: XOR<JenisEventCreateWithoutEventInput, JenisEventUncheckedCreateWithoutEventInput>
    where?: JenisEventWhereInput
  }

  export type JenisEventUpdateToOneWithWhereWithoutEventInput = {
    where?: JenisEventWhereInput
    data: XOR<JenisEventUpdateWithoutEventInput, JenisEventUncheckedUpdateWithoutEventInput>
  }

  export type JenisEventUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JenisEventUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PanitiaUpsertWithWhereUniqueWithoutEventInput = {
    where: PanitiaWhereUniqueInput
    update: XOR<PanitiaUpdateWithoutEventInput, PanitiaUncheckedUpdateWithoutEventInput>
    create: XOR<PanitiaCreateWithoutEventInput, PanitiaUncheckedCreateWithoutEventInput>
  }

  export type PanitiaUpdateWithWhereUniqueWithoutEventInput = {
    where: PanitiaWhereUniqueInput
    data: XOR<PanitiaUpdateWithoutEventInput, PanitiaUncheckedUpdateWithoutEventInput>
  }

  export type PanitiaUpdateManyWithWhereWithoutEventInput = {
    where: PanitiaScalarWhereInput
    data: XOR<PanitiaUpdateManyMutationInput, PanitiaUncheckedUpdateManyWithoutEventInput>
  }

  export type PanitiaScalarWhereInput = {
    AND?: PanitiaScalarWhereInput | PanitiaScalarWhereInput[]
    OR?: PanitiaScalarWhereInput[]
    NOT?: PanitiaScalarWhereInput | PanitiaScalarWhereInput[]
    id?: StringFilter<"Panitia"> | string
    eventId?: StringFilter<"Panitia"> | string
    employeeId?: StringNullableFilter<"Panitia"> | string | null
    createdAt?: DateTimeFilter<"Panitia"> | Date | string
    updatedAt?: DateTimeFilter<"Panitia"> | Date | string
  }

  export type EventCreateWithoutJenisEventInput = {
    id?: string
    notulensiId?: string | null
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    harga?: number | null
    tempat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    peserta?: PesertaCreateNestedManyWithoutEventInput
    notulensi?: NotulensiCreateNestedManyWithoutEventInput
    program: ProgramCreateNestedOneWithoutEventInput
    Panitia?: PanitiaCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutJenisEventInput = {
    id?: string
    programId: string
    notulensiId?: string | null
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    harga?: number | null
    tempat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    peserta?: PesertaUncheckedCreateNestedManyWithoutEventInput
    notulensi?: NotulensiUncheckedCreateNestedManyWithoutEventInput
    Panitia?: PanitiaUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutJenisEventInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutJenisEventInput, EventUncheckedCreateWithoutJenisEventInput>
  }

  export type EventCreateManyJenisEventInputEnvelope = {
    data: EventCreateManyJenisEventInput | EventCreateManyJenisEventInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutJenisEventInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutJenisEventInput, EventUncheckedUpdateWithoutJenisEventInput>
    create: XOR<EventCreateWithoutJenisEventInput, EventUncheckedCreateWithoutJenisEventInput>
  }

  export type EventUpdateWithWhereUniqueWithoutJenisEventInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutJenisEventInput, EventUncheckedUpdateWithoutJenisEventInput>
  }

  export type EventUpdateManyWithWhereWithoutJenisEventInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutJenisEventInput>
  }

  export type FileCreateWithoutNotulensiInput = {
    id?: string
    filename: string
    originalName: string
    path: string
    mimetype: string
    size: number
    extension: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Peserta?: PesertaCreateNestedOneWithoutSertifikatInput
  }

  export type FileUncheckedCreateWithoutNotulensiInput = {
    id?: string
    filename: string
    originalName: string
    path: string
    mimetype: string
    size: number
    extension: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pesertaId?: string | null
  }

  export type FileCreateOrConnectWithoutNotulensiInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutNotulensiInput, FileUncheckedCreateWithoutNotulensiInput>
  }

  export type FileCreateManyNotulensiInputEnvelope = {
    data: FileCreateManyNotulensiInput | FileCreateManyNotulensiInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutNotulensiInput = {
    id?: string
    notulensiId?: string | null
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    harga?: number | null
    tempat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    peserta?: PesertaCreateNestedManyWithoutEventInput
    program: ProgramCreateNestedOneWithoutEventInput
    JenisEvent?: JenisEventCreateNestedOneWithoutEventInput
    Panitia?: PanitiaCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutNotulensiInput = {
    id?: string
    programId: string
    jenisEventId?: string | null
    notulensiId?: string | null
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    harga?: number | null
    tempat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    peserta?: PesertaUncheckedCreateNestedManyWithoutEventInput
    Panitia?: PanitiaUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutNotulensiInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutNotulensiInput, EventUncheckedCreateWithoutNotulensiInput>
  }

  export type FileUpsertWithWhereUniqueWithoutNotulensiInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutNotulensiInput, FileUncheckedUpdateWithoutNotulensiInput>
    create: XOR<FileCreateWithoutNotulensiInput, FileUncheckedCreateWithoutNotulensiInput>
  }

  export type FileUpdateWithWhereUniqueWithoutNotulensiInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutNotulensiInput, FileUncheckedUpdateWithoutNotulensiInput>
  }

  export type FileUpdateManyWithWhereWithoutNotulensiInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutNotulensiInput>
  }

  export type FileScalarWhereInput = {
    AND?: FileScalarWhereInput | FileScalarWhereInput[]
    OR?: FileScalarWhereInput[]
    NOT?: FileScalarWhereInput | FileScalarWhereInput[]
    id?: StringFilter<"File"> | string
    filename?: StringFilter<"File"> | string
    originalName?: StringFilter<"File"> | string
    path?: StringFilter<"File"> | string
    mimetype?: StringFilter<"File"> | string
    size?: IntFilter<"File"> | number
    extension?: StringFilter<"File"> | string
    description?: StringNullableFilter<"File"> | string | null
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
    deletedAt?: DateTimeNullableFilter<"File"> | Date | string | null
    notulensiId?: StringNullableFilter<"File"> | string | null
    pesertaId?: StringNullableFilter<"File"> | string | null
  }

  export type EventUpsertWithoutNotulensiInput = {
    update: XOR<EventUpdateWithoutNotulensiInput, EventUncheckedUpdateWithoutNotulensiInput>
    create: XOR<EventCreateWithoutNotulensiInput, EventUncheckedCreateWithoutNotulensiInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutNotulensiInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutNotulensiInput, EventUncheckedUpdateWithoutNotulensiInput>
  }

  export type EventUpdateWithoutNotulensiInput = {
    id?: StringFieldUpdateOperationsInput | string
    notulensiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peserta?: PesertaUpdateManyWithoutEventNestedInput
    program?: ProgramUpdateOneRequiredWithoutEventNestedInput
    JenisEvent?: JenisEventUpdateOneWithoutEventNestedInput
    Panitia?: PanitiaUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutNotulensiInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    jenisEventId?: NullableStringFieldUpdateOperationsInput | string | null
    notulensiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peserta?: PesertaUncheckedUpdateManyWithoutEventNestedInput
    Panitia?: PanitiaUncheckedUpdateManyWithoutEventNestedInput
  }

  export type FileCreateWithoutPesertaInput = {
    id?: string
    filename: string
    originalName: string
    path: string
    mimetype: string
    size: number
    extension: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    notulensi?: NotulensiCreateNestedOneWithoutFileInput
  }

  export type FileUncheckedCreateWithoutPesertaInput = {
    id?: string
    filename: string
    originalName: string
    path: string
    mimetype: string
    size: number
    extension: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    notulensiId?: string | null
  }

  export type FileCreateOrConnectWithoutPesertaInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutPesertaInput, FileUncheckedCreateWithoutPesertaInput>
  }

  export type SertifikasiCreateWithoutPesertaInput = {
    id?: string
    name: string
    code: string
    Employee?: EmployeeCreateNestedManyWithoutSertifikasiInput
  }

  export type SertifikasiUncheckedCreateWithoutPesertaInput = {
    id?: string
    name: string
    code: string
    Employee?: EmployeeUncheckedCreateNestedManyWithoutSertifikasiInput
  }

  export type SertifikasiCreateOrConnectWithoutPesertaInput = {
    where: SertifikasiWhereUniqueInput
    create: XOR<SertifikasiCreateWithoutPesertaInput, SertifikasiUncheckedCreateWithoutPesertaInput>
  }

  export type EventCreateWithoutPesertaInput = {
    id?: string
    notulensiId?: string | null
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    harga?: number | null
    tempat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    notulensi?: NotulensiCreateNestedManyWithoutEventInput
    program: ProgramCreateNestedOneWithoutEventInput
    JenisEvent?: JenisEventCreateNestedOneWithoutEventInput
    Panitia?: PanitiaCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutPesertaInput = {
    id?: string
    programId: string
    jenisEventId?: string | null
    notulensiId?: string | null
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    harga?: number | null
    tempat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    notulensi?: NotulensiUncheckedCreateNestedManyWithoutEventInput
    Panitia?: PanitiaUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutPesertaInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutPesertaInput, EventUncheckedCreateWithoutPesertaInput>
  }

  export type FileUpsertWithoutPesertaInput = {
    update: XOR<FileUpdateWithoutPesertaInput, FileUncheckedUpdateWithoutPesertaInput>
    create: XOR<FileCreateWithoutPesertaInput, FileUncheckedCreateWithoutPesertaInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutPesertaInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutPesertaInput, FileUncheckedUpdateWithoutPesertaInput>
  }

  export type FileUpdateWithoutPesertaInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    extension?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notulensi?: NotulensiUpdateOneWithoutFileNestedInput
  }

  export type FileUncheckedUpdateWithoutPesertaInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    extension?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notulensiId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SertifikasiUpsertWithWhereUniqueWithoutPesertaInput = {
    where: SertifikasiWhereUniqueInput
    update: XOR<SertifikasiUpdateWithoutPesertaInput, SertifikasiUncheckedUpdateWithoutPesertaInput>
    create: XOR<SertifikasiCreateWithoutPesertaInput, SertifikasiUncheckedCreateWithoutPesertaInput>
  }

  export type SertifikasiUpdateWithWhereUniqueWithoutPesertaInput = {
    where: SertifikasiWhereUniqueInput
    data: XOR<SertifikasiUpdateWithoutPesertaInput, SertifikasiUncheckedUpdateWithoutPesertaInput>
  }

  export type SertifikasiUpdateManyWithWhereWithoutPesertaInput = {
    where: SertifikasiScalarWhereInput
    data: XOR<SertifikasiUpdateManyMutationInput, SertifikasiUncheckedUpdateManyWithoutPesertaInput>
  }

  export type SertifikasiScalarWhereInput = {
    AND?: SertifikasiScalarWhereInput | SertifikasiScalarWhereInput[]
    OR?: SertifikasiScalarWhereInput[]
    NOT?: SertifikasiScalarWhereInput | SertifikasiScalarWhereInput[]
    id?: StringFilter<"Sertifikasi"> | string
    name?: StringFilter<"Sertifikasi"> | string
    code?: StringFilter<"Sertifikasi"> | string
  }

  export type EventUpsertWithWhereUniqueWithoutPesertaInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutPesertaInput, EventUncheckedUpdateWithoutPesertaInput>
    create: XOR<EventCreateWithoutPesertaInput, EventUncheckedCreateWithoutPesertaInput>
  }

  export type EventUpdateWithWhereUniqueWithoutPesertaInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutPesertaInput, EventUncheckedUpdateWithoutPesertaInput>
  }

  export type EventUpdateManyWithWhereWithoutPesertaInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutPesertaInput>
  }

  export type SertifikasiCreateWithoutEmployeeInput = {
    id?: string
    name: string
    code: string
    Peserta?: PesertaCreateNestedManyWithoutSertifikasiTerdaftarInput
  }

  export type SertifikasiUncheckedCreateWithoutEmployeeInput = {
    id?: string
    name: string
    code: string
    Peserta?: PesertaUncheckedCreateNestedManyWithoutSertifikasiTerdaftarInput
  }

  export type SertifikasiCreateOrConnectWithoutEmployeeInput = {
    where: SertifikasiWhereUniqueInput
    create: XOR<SertifikasiCreateWithoutEmployeeInput, SertifikasiUncheckedCreateWithoutEmployeeInput>
  }

  export type PanitiaCreateWithoutStaffInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutPanitiaInput
    PIC?: EmployeeCreateNestedOneWithoutPICInput
  }

  export type PanitiaUncheckedCreateWithoutStaffInput = {
    id?: string
    eventId: string
    employeeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PanitiaCreateOrConnectWithoutStaffInput = {
    where: PanitiaWhereUniqueInput
    create: XOR<PanitiaCreateWithoutStaffInput, PanitiaUncheckedCreateWithoutStaffInput>
  }

  export type PanitiaCreateWithoutPICInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: EmployeeCreateNestedManyWithoutStaffInput
    event: EventCreateNestedOneWithoutPanitiaInput
  }

  export type PanitiaUncheckedCreateWithoutPICInput = {
    id?: string
    eventId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: EmployeeUncheckedCreateNestedManyWithoutStaffInput
  }

  export type PanitiaCreateOrConnectWithoutPICInput = {
    where: PanitiaWhereUniqueInput
    create: XOR<PanitiaCreateWithoutPICInput, PanitiaUncheckedCreateWithoutPICInput>
  }

  export type PanitiaCreateManyPICInputEnvelope = {
    data: PanitiaCreateManyPICInput | PanitiaCreateManyPICInput[]
    skipDuplicates?: boolean
  }

  export type SertifikasiUpsertWithoutEmployeeInput = {
    update: XOR<SertifikasiUpdateWithoutEmployeeInput, SertifikasiUncheckedUpdateWithoutEmployeeInput>
    create: XOR<SertifikasiCreateWithoutEmployeeInput, SertifikasiUncheckedCreateWithoutEmployeeInput>
    where?: SertifikasiWhereInput
  }

  export type SertifikasiUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: SertifikasiWhereInput
    data: XOR<SertifikasiUpdateWithoutEmployeeInput, SertifikasiUncheckedUpdateWithoutEmployeeInput>
  }

  export type SertifikasiUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    Peserta?: PesertaUpdateManyWithoutSertifikasiTerdaftarNestedInput
  }

  export type SertifikasiUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    Peserta?: PesertaUncheckedUpdateManyWithoutSertifikasiTerdaftarNestedInput
  }

  export type PanitiaUpsertWithWhereUniqueWithoutStaffInput = {
    where: PanitiaWhereUniqueInput
    update: XOR<PanitiaUpdateWithoutStaffInput, PanitiaUncheckedUpdateWithoutStaffInput>
    create: XOR<PanitiaCreateWithoutStaffInput, PanitiaUncheckedCreateWithoutStaffInput>
  }

  export type PanitiaUpdateWithWhereUniqueWithoutStaffInput = {
    where: PanitiaWhereUniqueInput
    data: XOR<PanitiaUpdateWithoutStaffInput, PanitiaUncheckedUpdateWithoutStaffInput>
  }

  export type PanitiaUpdateManyWithWhereWithoutStaffInput = {
    where: PanitiaScalarWhereInput
    data: XOR<PanitiaUpdateManyMutationInput, PanitiaUncheckedUpdateManyWithoutStaffInput>
  }

  export type PanitiaUpsertWithWhereUniqueWithoutPICInput = {
    where: PanitiaWhereUniqueInput
    update: XOR<PanitiaUpdateWithoutPICInput, PanitiaUncheckedUpdateWithoutPICInput>
    create: XOR<PanitiaCreateWithoutPICInput, PanitiaUncheckedCreateWithoutPICInput>
  }

  export type PanitiaUpdateWithWhereUniqueWithoutPICInput = {
    where: PanitiaWhereUniqueInput
    data: XOR<PanitiaUpdateWithoutPICInput, PanitiaUncheckedUpdateWithoutPICInput>
  }

  export type PanitiaUpdateManyWithWhereWithoutPICInput = {
    where: PanitiaScalarWhereInput
    data: XOR<PanitiaUpdateManyMutationInput, PanitiaUncheckedUpdateManyWithoutPICInput>
  }

  export type EmployeeCreateWithoutStaffInput = {
    id?: string
    name: string
    NIP?: string | null
    email: string
    phone?: string | null
    NPWP?: string | null
    namaBank?: string | null
    noRek?: string | null
    status?: string | null
    notifikasi?: string | null
    jabatan?: string | null
    unit?: string | null
    role?: $Enums.EmployeeRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sertifikasi?: SertifikasiCreateNestedOneWithoutEmployeeInput
    PIC?: PanitiaCreateNestedManyWithoutPICInput
  }

  export type EmployeeUncheckedCreateWithoutStaffInput = {
    id?: string
    sertifikasiId?: string | null
    name: string
    NIP?: string | null
    email: string
    phone?: string | null
    NPWP?: string | null
    namaBank?: string | null
    noRek?: string | null
    status?: string | null
    notifikasi?: string | null
    jabatan?: string | null
    unit?: string | null
    role?: $Enums.EmployeeRole
    createdAt?: Date | string
    updatedAt?: Date | string
    PIC?: PanitiaUncheckedCreateNestedManyWithoutPICInput
  }

  export type EmployeeCreateOrConnectWithoutStaffInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutStaffInput, EmployeeUncheckedCreateWithoutStaffInput>
  }

  export type EventCreateWithoutPanitiaInput = {
    id?: string
    notulensiId?: string | null
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    harga?: number | null
    tempat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    peserta?: PesertaCreateNestedManyWithoutEventInput
    notulensi?: NotulensiCreateNestedManyWithoutEventInput
    program: ProgramCreateNestedOneWithoutEventInput
    JenisEvent?: JenisEventCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutPanitiaInput = {
    id?: string
    programId: string
    jenisEventId?: string | null
    notulensiId?: string | null
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    harga?: number | null
    tempat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    peserta?: PesertaUncheckedCreateNestedManyWithoutEventInput
    notulensi?: NotulensiUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutPanitiaInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutPanitiaInput, EventUncheckedCreateWithoutPanitiaInput>
  }

  export type EmployeeCreateWithoutPICInput = {
    id?: string
    name: string
    NIP?: string | null
    email: string
    phone?: string | null
    NPWP?: string | null
    namaBank?: string | null
    noRek?: string | null
    status?: string | null
    notifikasi?: string | null
    jabatan?: string | null
    unit?: string | null
    role?: $Enums.EmployeeRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sertifikasi?: SertifikasiCreateNestedOneWithoutEmployeeInput
    staff?: PanitiaCreateNestedManyWithoutStaffInput
  }

  export type EmployeeUncheckedCreateWithoutPICInput = {
    id?: string
    sertifikasiId?: string | null
    name: string
    NIP?: string | null
    email: string
    phone?: string | null
    NPWP?: string | null
    namaBank?: string | null
    noRek?: string | null
    status?: string | null
    notifikasi?: string | null
    jabatan?: string | null
    unit?: string | null
    role?: $Enums.EmployeeRole
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: PanitiaUncheckedCreateNestedManyWithoutStaffInput
  }

  export type EmployeeCreateOrConnectWithoutPICInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutPICInput, EmployeeUncheckedCreateWithoutPICInput>
  }

  export type EmployeeUpsertWithWhereUniqueWithoutStaffInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutStaffInput, EmployeeUncheckedUpdateWithoutStaffInput>
    create: XOR<EmployeeCreateWithoutStaffInput, EmployeeUncheckedCreateWithoutStaffInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutStaffInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutStaffInput, EmployeeUncheckedUpdateWithoutStaffInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutStaffInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutStaffInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: StringFilter<"Employee"> | string
    sertifikasiId?: StringNullableFilter<"Employee"> | string | null
    name?: StringFilter<"Employee"> | string
    NIP?: StringNullableFilter<"Employee"> | string | null
    email?: StringFilter<"Employee"> | string
    phone?: StringNullableFilter<"Employee"> | string | null
    NPWP?: StringNullableFilter<"Employee"> | string | null
    namaBank?: StringNullableFilter<"Employee"> | string | null
    noRek?: StringNullableFilter<"Employee"> | string | null
    status?: StringNullableFilter<"Employee"> | string | null
    notifikasi?: StringNullableFilter<"Employee"> | string | null
    jabatan?: StringNullableFilter<"Employee"> | string | null
    unit?: StringNullableFilter<"Employee"> | string | null
    role?: EnumEmployeeRoleFilter<"Employee"> | $Enums.EmployeeRole
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
  }

  export type EventUpsertWithoutPanitiaInput = {
    update: XOR<EventUpdateWithoutPanitiaInput, EventUncheckedUpdateWithoutPanitiaInput>
    create: XOR<EventCreateWithoutPanitiaInput, EventUncheckedCreateWithoutPanitiaInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutPanitiaInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutPanitiaInput, EventUncheckedUpdateWithoutPanitiaInput>
  }

  export type EventUpdateWithoutPanitiaInput = {
    id?: StringFieldUpdateOperationsInput | string
    notulensiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peserta?: PesertaUpdateManyWithoutEventNestedInput
    notulensi?: NotulensiUpdateManyWithoutEventNestedInput
    program?: ProgramUpdateOneRequiredWithoutEventNestedInput
    JenisEvent?: JenisEventUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutPanitiaInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    jenisEventId?: NullableStringFieldUpdateOperationsInput | string | null
    notulensiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peserta?: PesertaUncheckedUpdateManyWithoutEventNestedInput
    notulensi?: NotulensiUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EmployeeUpsertWithoutPICInput = {
    update: XOR<EmployeeUpdateWithoutPICInput, EmployeeUncheckedUpdateWithoutPICInput>
    create: XOR<EmployeeCreateWithoutPICInput, EmployeeUncheckedCreateWithoutPICInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutPICInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutPICInput, EmployeeUncheckedUpdateWithoutPICInput>
  }

  export type EmployeeUpdateWithoutPICInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    NIP?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    NPWP?: NullableStringFieldUpdateOperationsInput | string | null
    namaBank?: NullableStringFieldUpdateOperationsInput | string | null
    noRek?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sertifikasi?: SertifikasiUpdateOneWithoutEmployeeNestedInput
    staff?: PanitiaUpdateManyWithoutStaffNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutPICInput = {
    id?: StringFieldUpdateOperationsInput | string
    sertifikasiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    NIP?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    NPWP?: NullableStringFieldUpdateOperationsInput | string | null
    namaBank?: NullableStringFieldUpdateOperationsInput | string | null
    noRek?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: PanitiaUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type NotulensiCreateWithoutFileInput = {
    id?: string
    name: string
    tanggal: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Event: EventCreateNestedOneWithoutNotulensiInput
  }

  export type NotulensiUncheckedCreateWithoutFileInput = {
    id?: string
    eventId: string
    name: string
    tanggal: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type NotulensiCreateOrConnectWithoutFileInput = {
    where: NotulensiWhereUniqueInput
    create: XOR<NotulensiCreateWithoutFileInput, NotulensiUncheckedCreateWithoutFileInput>
  }

  export type PesertaCreateWithoutSertifikatInput = {
    id?: string
    provider?: string
    providerId?: string | null
    nim?: string | null
    name: string
    email: string
    phone?: string | null
    status?: string | null
    balance?: number | null
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sertifikasiTerdaftar?: SertifikasiCreateNestedManyWithoutPesertaInput
    Event?: EventCreateNestedManyWithoutPesertaInput
  }

  export type PesertaUncheckedCreateWithoutSertifikatInput = {
    id?: string
    provider?: string
    providerId?: string | null
    nim?: string | null
    name: string
    email: string
    phone?: string | null
    status?: string | null
    balance?: number | null
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sertifikasiTerdaftar?: SertifikasiUncheckedCreateNestedManyWithoutPesertaInput
    Event?: EventUncheckedCreateNestedManyWithoutPesertaInput
  }

  export type PesertaCreateOrConnectWithoutSertifikatInput = {
    where: PesertaWhereUniqueInput
    create: XOR<PesertaCreateWithoutSertifikatInput, PesertaUncheckedCreateWithoutSertifikatInput>
  }

  export type NotulensiUpsertWithoutFileInput = {
    update: XOR<NotulensiUpdateWithoutFileInput, NotulensiUncheckedUpdateWithoutFileInput>
    create: XOR<NotulensiCreateWithoutFileInput, NotulensiUncheckedCreateWithoutFileInput>
    where?: NotulensiWhereInput
  }

  export type NotulensiUpdateToOneWithWhereWithoutFileInput = {
    where?: NotulensiWhereInput
    data: XOR<NotulensiUpdateWithoutFileInput, NotulensiUncheckedUpdateWithoutFileInput>
  }

  export type NotulensiUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Event?: EventUpdateOneRequiredWithoutNotulensiNestedInput
  }

  export type NotulensiUncheckedUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PesertaUpsertWithoutSertifikatInput = {
    update: XOR<PesertaUpdateWithoutSertifikatInput, PesertaUncheckedUpdateWithoutSertifikatInput>
    create: XOR<PesertaCreateWithoutSertifikatInput, PesertaUncheckedCreateWithoutSertifikatInput>
    where?: PesertaWhereInput
  }

  export type PesertaUpdateToOneWithWhereWithoutSertifikatInput = {
    where?: PesertaWhereInput
    data: XOR<PesertaUpdateWithoutSertifikatInput, PesertaUncheckedUpdateWithoutSertifikatInput>
  }

  export type PesertaUpdateWithoutSertifikatInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sertifikasiTerdaftar?: SertifikasiUpdateManyWithoutPesertaNestedInput
    Event?: EventUpdateManyWithoutPesertaNestedInput
  }

  export type PesertaUncheckedUpdateWithoutSertifikatInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sertifikasiTerdaftar?: SertifikasiUncheckedUpdateManyWithoutPesertaNestedInput
    Event?: EventUncheckedUpdateManyWithoutPesertaNestedInput
  }

  export type EmployeeCreateWithoutSertifikasiInput = {
    id?: string
    name: string
    NIP?: string | null
    email: string
    phone?: string | null
    NPWP?: string | null
    namaBank?: string | null
    noRek?: string | null
    status?: string | null
    notifikasi?: string | null
    jabatan?: string | null
    unit?: string | null
    role?: $Enums.EmployeeRole
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: PanitiaCreateNestedManyWithoutStaffInput
    PIC?: PanitiaCreateNestedManyWithoutPICInput
  }

  export type EmployeeUncheckedCreateWithoutSertifikasiInput = {
    id?: string
    name: string
    NIP?: string | null
    email: string
    phone?: string | null
    NPWP?: string | null
    namaBank?: string | null
    noRek?: string | null
    status?: string | null
    notifikasi?: string | null
    jabatan?: string | null
    unit?: string | null
    role?: $Enums.EmployeeRole
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: PanitiaUncheckedCreateNestedManyWithoutStaffInput
    PIC?: PanitiaUncheckedCreateNestedManyWithoutPICInput
  }

  export type EmployeeCreateOrConnectWithoutSertifikasiInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutSertifikasiInput, EmployeeUncheckedCreateWithoutSertifikasiInput>
  }

  export type EmployeeCreateManySertifikasiInputEnvelope = {
    data: EmployeeCreateManySertifikasiInput | EmployeeCreateManySertifikasiInput[]
    skipDuplicates?: boolean
  }

  export type PesertaCreateWithoutSertifikasiTerdaftarInput = {
    id?: string
    provider?: string
    providerId?: string | null
    nim?: string | null
    name: string
    email: string
    phone?: string | null
    status?: string | null
    balance?: number | null
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sertifikat?: FileCreateNestedOneWithoutPesertaInput
    Event?: EventCreateNestedManyWithoutPesertaInput
  }

  export type PesertaUncheckedCreateWithoutSertifikasiTerdaftarInput = {
    id?: string
    provider?: string
    providerId?: string | null
    nim?: string | null
    name: string
    email: string
    phone?: string | null
    status?: string | null
    balance?: number | null
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sertifikat?: FileUncheckedCreateNestedOneWithoutPesertaInput
    Event?: EventUncheckedCreateNestedManyWithoutPesertaInput
  }

  export type PesertaCreateOrConnectWithoutSertifikasiTerdaftarInput = {
    where: PesertaWhereUniqueInput
    create: XOR<PesertaCreateWithoutSertifikasiTerdaftarInput, PesertaUncheckedCreateWithoutSertifikasiTerdaftarInput>
  }

  export type EmployeeUpsertWithWhereUniqueWithoutSertifikasiInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutSertifikasiInput, EmployeeUncheckedUpdateWithoutSertifikasiInput>
    create: XOR<EmployeeCreateWithoutSertifikasiInput, EmployeeUncheckedCreateWithoutSertifikasiInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutSertifikasiInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutSertifikasiInput, EmployeeUncheckedUpdateWithoutSertifikasiInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutSertifikasiInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutSertifikasiInput>
  }

  export type PesertaUpsertWithWhereUniqueWithoutSertifikasiTerdaftarInput = {
    where: PesertaWhereUniqueInput
    update: XOR<PesertaUpdateWithoutSertifikasiTerdaftarInput, PesertaUncheckedUpdateWithoutSertifikasiTerdaftarInput>
    create: XOR<PesertaCreateWithoutSertifikasiTerdaftarInput, PesertaUncheckedCreateWithoutSertifikasiTerdaftarInput>
  }

  export type PesertaUpdateWithWhereUniqueWithoutSertifikasiTerdaftarInput = {
    where: PesertaWhereUniqueInput
    data: XOR<PesertaUpdateWithoutSertifikasiTerdaftarInput, PesertaUncheckedUpdateWithoutSertifikasiTerdaftarInput>
  }

  export type PesertaUpdateManyWithWhereWithoutSertifikasiTerdaftarInput = {
    where: PesertaScalarWhereInput
    data: XOR<PesertaUpdateManyMutationInput, PesertaUncheckedUpdateManyWithoutSertifikasiTerdaftarInput>
  }

  export type EventCreateManyProgramInput = {
    id?: string
    jenisEventId?: string | null
    notulensiId?: string | null
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    harga?: number | null
    tempat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EventUpdateWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    notulensiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peserta?: PesertaUpdateManyWithoutEventNestedInput
    notulensi?: NotulensiUpdateManyWithoutEventNestedInput
    JenisEvent?: JenisEventUpdateOneWithoutEventNestedInput
    Panitia?: PanitiaUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenisEventId?: NullableStringFieldUpdateOperationsInput | string | null
    notulensiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peserta?: PesertaUncheckedUpdateManyWithoutEventNestedInput
    notulensi?: NotulensiUncheckedUpdateManyWithoutEventNestedInput
    Panitia?: PanitiaUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenisEventId?: NullableStringFieldUpdateOperationsInput | string | null
    notulensiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotulensiCreateManyEventInput = {
    id?: string
    name: string
    tanggal: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PanitiaCreateManyEventInput = {
    id?: string
    employeeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PesertaUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sertifikat?: FileUpdateOneWithoutPesertaNestedInput
    sertifikasiTerdaftar?: SertifikasiUpdateManyWithoutPesertaNestedInput
  }

  export type PesertaUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sertifikat?: FileUncheckedUpdateOneWithoutPesertaNestedInput
    sertifikasiTerdaftar?: SertifikasiUncheckedUpdateManyWithoutPesertaNestedInput
  }

  export type PesertaUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotulensiUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    File?: FileUpdateManyWithoutNotulensiNestedInput
  }

  export type NotulensiUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    File?: FileUncheckedUpdateManyWithoutNotulensiNestedInput
  }

  export type NotulensiUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PanitiaUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: EmployeeUpdateManyWithoutStaffNestedInput
    PIC?: EmployeeUpdateOneWithoutPICNestedInput
  }

  export type PanitiaUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: EmployeeUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type PanitiaUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyJenisEventInput = {
    id?: string
    programId: string
    notulensiId?: string | null
    name: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    harga?: number | null
    tempat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EventUpdateWithoutJenisEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    notulensiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peserta?: PesertaUpdateManyWithoutEventNestedInput
    notulensi?: NotulensiUpdateManyWithoutEventNestedInput
    program?: ProgramUpdateOneRequiredWithoutEventNestedInput
    Panitia?: PanitiaUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutJenisEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    notulensiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peserta?: PesertaUncheckedUpdateManyWithoutEventNestedInput
    notulensi?: NotulensiUncheckedUpdateManyWithoutEventNestedInput
    Panitia?: PanitiaUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutJenisEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    notulensiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FileCreateManyNotulensiInput = {
    id?: string
    filename: string
    originalName: string
    path: string
    mimetype: string
    size: number
    extension: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pesertaId?: string | null
  }

  export type FileUpdateWithoutNotulensiInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    extension?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Peserta?: PesertaUpdateOneWithoutSertifikatNestedInput
  }

  export type FileUncheckedUpdateWithoutNotulensiInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    extension?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesertaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FileUncheckedUpdateManyWithoutNotulensiInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    extension?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesertaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SertifikasiUpdateWithoutPesertaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    Employee?: EmployeeUpdateManyWithoutSertifikasiNestedInput
  }

  export type SertifikasiUncheckedUpdateWithoutPesertaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    Employee?: EmployeeUncheckedUpdateManyWithoutSertifikasiNestedInput
  }

  export type SertifikasiUncheckedUpdateManyWithoutPesertaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type EventUpdateWithoutPesertaInput = {
    id?: StringFieldUpdateOperationsInput | string
    notulensiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notulensi?: NotulensiUpdateManyWithoutEventNestedInput
    program?: ProgramUpdateOneRequiredWithoutEventNestedInput
    JenisEvent?: JenisEventUpdateOneWithoutEventNestedInput
    Panitia?: PanitiaUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutPesertaInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    jenisEventId?: NullableStringFieldUpdateOperationsInput | string | null
    notulensiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notulensi?: NotulensiUncheckedUpdateManyWithoutEventNestedInput
    Panitia?: PanitiaUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutPesertaInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    jenisEventId?: NullableStringFieldUpdateOperationsInput | string | null
    notulensiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    tempat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PanitiaCreateManyPICInput = {
    id?: string
    eventId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PanitiaUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutPanitiaNestedInput
    PIC?: EmployeeUpdateOneWithoutPICNestedInput
  }

  export type PanitiaUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanitiaUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanitiaUpdateWithoutPICInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: EmployeeUpdateManyWithoutStaffNestedInput
    event?: EventUpdateOneRequiredWithoutPanitiaNestedInput
  }

  export type PanitiaUncheckedUpdateWithoutPICInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: EmployeeUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type PanitiaUncheckedUpdateManyWithoutPICInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    NIP?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    NPWP?: NullableStringFieldUpdateOperationsInput | string | null
    namaBank?: NullableStringFieldUpdateOperationsInput | string | null
    noRek?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sertifikasi?: SertifikasiUpdateOneWithoutEmployeeNestedInput
    PIC?: PanitiaUpdateManyWithoutPICNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    sertifikasiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    NIP?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    NPWP?: NullableStringFieldUpdateOperationsInput | string | null
    namaBank?: NullableStringFieldUpdateOperationsInput | string | null
    noRek?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PIC?: PanitiaUncheckedUpdateManyWithoutPICNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    sertifikasiId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    NIP?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    NPWP?: NullableStringFieldUpdateOperationsInput | string | null
    namaBank?: NullableStringFieldUpdateOperationsInput | string | null
    noRek?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateManySertifikasiInput = {
    id?: string
    name: string
    NIP?: string | null
    email: string
    phone?: string | null
    NPWP?: string | null
    namaBank?: string | null
    noRek?: string | null
    status?: string | null
    notifikasi?: string | null
    jabatan?: string | null
    unit?: string | null
    role?: $Enums.EmployeeRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateWithoutSertifikasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    NIP?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    NPWP?: NullableStringFieldUpdateOperationsInput | string | null
    namaBank?: NullableStringFieldUpdateOperationsInput | string | null
    noRek?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: PanitiaUpdateManyWithoutStaffNestedInput
    PIC?: PanitiaUpdateManyWithoutPICNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutSertifikasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    NIP?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    NPWP?: NullableStringFieldUpdateOperationsInput | string | null
    namaBank?: NullableStringFieldUpdateOperationsInput | string | null
    noRek?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: PanitiaUncheckedUpdateManyWithoutStaffNestedInput
    PIC?: PanitiaUncheckedUpdateManyWithoutPICNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutSertifikasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    NIP?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    NPWP?: NullableStringFieldUpdateOperationsInput | string | null
    namaBank?: NullableStringFieldUpdateOperationsInput | string | null
    noRek?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    notifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumEmployeeRoleFieldUpdateOperationsInput | $Enums.EmployeeRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesertaUpdateWithoutSertifikasiTerdaftarInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sertifikat?: FileUpdateOneWithoutPesertaNestedInput
    Event?: EventUpdateManyWithoutPesertaNestedInput
  }

  export type PesertaUncheckedUpdateWithoutSertifikasiTerdaftarInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sertifikat?: FileUncheckedUpdateOneWithoutPesertaNestedInput
    Event?: EventUncheckedUpdateManyWithoutPesertaNestedInput
  }

  export type PesertaUncheckedUpdateManyWithoutSertifikasiTerdaftarInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}