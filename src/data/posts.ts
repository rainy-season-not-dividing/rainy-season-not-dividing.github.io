export interface BlogPost {
  slug: string
  title: string
  date: string
  summary: string
  content: string
}

export const posts: BlogPost[] = [
  {
    slug: 'redis-cache-pattern',
    title: '项目中的 Redis 缓存实践：防穿透、雪崩与击穿',
    date: '2025-03-01',
    summary: '在仿大众点评与外卖系统中，采用 Cache-Aside、空值缓存、随机过期与分布式锁等策略，降低数据库压力并保证一致性。',
    content: `
## 为什么需要多级缓存

在高并发读场景下，直接打数据库会成为瓶颈。用 Redis 做缓存可以显著降低延迟和 DB 压力，但需要同时考虑**缓存穿透、雪崩、击穿**等问题。

## 实践策略

### 1. Cache-Aside

先查缓存，未命中再查 DB 并回写缓存。商户信息、菜品信息等均采用该模式。

### 2. 空值缓存

对不存在的 key 也缓存空值并设置较短 TTL，避免恶意或异常请求反复打 DB（防穿透）。

### 3. 随机过期时间

在基础 TTL 上加随机偏移，避免大量 key 同时失效导致流量全部打到 DB（防雪崩）。

### 4. 分布式锁

热点 key 更新时用 Redisson 分布式锁，保证只有一个线程回源，其余等待或走旧缓存（防击穿）。

## 效果

在本地压测与线上仿真中，菜品查询 P99 从 100ms+ 降至约 15ms，数据库读请求量减少约 70%，且未出现缓存导致的数据不一致问题。
    `.trim()
  },
  {
    slug: 'order-consistency-mysql',
    title: '订单与库存一致性：MySQL 事务与行锁',
    date: '2025-02-15',
    summary: '校遇项目中，将「库存校验 - 订单创建 - 库存扣减」放在同一事务中，配合行锁串行化请求，在 500 并发下实现 0% 错误率与 100% 数据一致性。',
    content: `
## 问题

高并发下单时，若库存校验与扣减分离或未加锁，容易出现超卖或数据不一致。

## 方案

将「库存校验 → 订单创建 → 库存扣减」封装在**同一 MySQL 事务**中，对库存行使用 **SELECT ... FOR UPDATE** 行锁，使同一商品的请求串行化。

## 实现要点

- 事务隔离级别：RR（Repeatable Read）
- 扣减使用 \`UPDATE ... SET stock = stock - ? WHERE id = ? AND stock >= ?\`
- 若影响行数为 0 则回滚并返回「库存不足」

## 压测结果

500 并发下，下单接口错误率 0%，订单与库存数据一致性 100%。
    `.trim()
  }
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getPostsSorted() {
  return [...posts].sort((a, b) => (b.date > a.date ? 1 : -1))
}
