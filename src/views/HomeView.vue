<template>
  <div>
    <section
      class="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white py-20 dark:from-slate-800 dark:to-slate-900">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <div
          class="mb-6 inline-block h-32 w-32 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-4xl font-bold text-primary-600 dark:text-primary-400">
          {{ siteConfig.name.charAt(0) }}
        </div>
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
          {{ siteConfig.name }}
        </h1>
        <p class="mt-3 text-lg text-gray-600 dark:text-gray-300">
          {{ siteConfig.tagline }}
        </p>
        <p class="mt-2 text-gray-500 dark:text-gray-400">
          {{ siteConfig.jobTarget }}
        </p>
        <p class="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          围绕多模态感知、边缘部署与系统设计开展研究，形成 1 篇已见刊 EI 检索会议论文（学生第一作者）与 2 项发明专利（学生第一作者），
          同时具备模型训练与实验分析、高效推理优化、系统实现与工程落地能力。
        </p>
        <div class="mt-6 flex flex-wrap justify-center gap-2">
          <span v-for="tag in siteConfig.tags" :key="tag"
            class="rounded-full bg-primary-100 px-4 py-1.5 text-sm text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
            {{ tag }}
          </span>
        </div>
        <div class="mt-8 flex justify-center gap-4">
          <router-link to="/research"
            class="rounded-lg bg-primary-600 px-6 py-2.5 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600">
            查看科研经历
          </router-link>
          <router-link to="/contact"
            class="rounded-lg border border-gray-300 px-6 py-2.5 text-gray-700 hover:bg-gray-50 dark:border-slate-600 dark:text-gray-200 dark:hover:bg-slate-700">
            联系我
          </router-link>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="mx-auto max-w-5xl px-4">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">快速导航</h2>
        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <router-link to="/research"
            class="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-primary-200 hover:shadow dark:border-slate-700 dark:bg-slate-800 dark:hover:border-primary-800">
            <span class="text-2xl">📂</span>
            <h3
              class="mt-2 font-medium text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
              科研经历</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">科研项目、论文与专利</p>
          </router-link>
          <router-link to="/projects"
            class="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-primary-200 hover:shadow dark:border-slate-700 dark:bg-slate-800 dark:hover:border-primary-800">
            <span class="text-2xl">📄</span>
            <h3
              class="mt-2 font-medium text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
              项目/实习经历</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">实习项目与工程实践</p>
          </router-link>
          <router-link to="/skills"
            class="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-primary-200 hover:shadow dark:border-slate-700 dark:bg-slate-800 dark:hover:border-primary-800">
            <span class="text-2xl">🔧</span>
            <h3
              class="mt-2 font-medium text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
              技术与代码</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">研究技术栈与相关实现</p>
          </router-link>
          <router-link to="/blog"
            class="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-primary-200 hover:shadow dark:border-slate-700 dark:bg-slate-800 dark:hover:border-primary-800">
            <span class="text-2xl">✍️</span>
            <h3
              class="mt-2 font-medium text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
              技术博客</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">原创技术文章</p>
          </router-link>
        </div>
      </div>
    </section>

    <section class="border-t border-gray-200 py-16 dark:border-slate-700">
      <div class="mx-auto max-w-5xl px-4">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">成长历程</h2>
        <div class="mt-8 space-y-8">
          <section>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">大一：基础建立与学习节奏形成</h3>
            <ul class="mt-4 space-y-3">
              <li class="flex gap-4 border-l-2 border-primary-500 pl-4">
                <span class="text-sm text-gray-500 dark:text-gray-400">2023.09</span>
                <span>入学，进入计算机科学与技术专业</span>
              </li>
              <li class="flex gap-4 border-l-2 border-primary-500 pl-4">
                <span class="text-sm text-gray-500 dark:text-gray-400">2024.04</span>
                <span>获得国家励志奖学金/校三好学生等阶段性认可</span>
              </li>
              <li class="flex gap-4 border-l-2 border-primary-500 pl-4">
                <span class="text-sm text-gray-500 dark:text-gray-400">2024.06</span>
                <span>完成基础课程积累</span>
              </li>
              <li class="flex gap-4 border-l-2 border-primary-500 pl-4">
                <span class="text-sm text-gray-500 dark:text-gray-400">2024.07</span>
                <span>开始接触计算机视觉与 AI 应用实践</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">大二：工程实践与科研方向萌芽</h3>
            <ul class="mt-4 space-y-3">
              <li class="flex gap-4 border-l-2 border-primary-500 pl-4">
                <span class="text-sm text-gray-500 dark:text-gray-400">2024.09</span>
                <span>开始接触机器学习与模型训练流程</span>
              </li>
              <li class="flex gap-4 border-l-2 border-primary-500 pl-4">
                <span class="text-sm text-gray-500 dark:text-gray-400">2024.10</span>
                <span>开始系统学习 PyTorch 与神经网络基础</span>
              </li>
              <li class="flex gap-4 border-l-2 border-primary-500 pl-4">
                <span class="text-sm text-gray-500 dark:text-gray-400">2025.03</span>
                <span>开始 STM32 与嵌入式实践</span>
              </li>
              <li class="flex gap-4 border-l-2 border-primary-500 pl-4">
                <span class="text-sm text-gray-500 dark:text-gray-400">2025.05</span>
                <span>完成智能小车设计与调试</span>
              </li>
              <li class="flex gap-4 border-l-2 border-primary-500 pl-4">
                <span class="text-sm text-gray-500 dark:text-gray-400">2025.05</span>
                <span>论文见刊，两项专利进入实质审查</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">大三：AI 方向收束与系统能力增强</h3>
            <ul class="mt-4 space-y-3">
              <li class="flex gap-4 border-l-2 border-primary-500 pl-4">
                <span class="text-sm text-gray-500 dark:text-gray-400">2025.07</span>
                <span>完成高并发后端项目，并开始关注智能体 Agent 相关应用</span>
              </li>
              <li class="flex gap-4 border-l-2 border-primary-500 pl-4">
                <span class="text-sm text-gray-500 dark:text-gray-400">2025.10</span>
                <span>校遇项目完成，支撑 3000+ 并发 0 错误，并积累 Linux 云服务器部署与项目上线经验</span>
              </li>
              <li class="flex gap-4 border-l-2 border-primary-500 pl-4">
                <span class="text-sm text-gray-500 dark:text-gray-400">2026.04</span>
                <span>持续完善深度学习、多模态建模与边缘优化实验记录</span>
              </li>
              <li class="flex gap-4 border-l-2 border-primary-500 pl-4">
                <span class="text-sm text-gray-500 dark:text-gray-400">2026.06</span>
                <span>参与多智能体应用系统实习项目</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">大四：面向升学与长期方向继续沉淀</h3>
            <ul class="mt-4 space-y-3">
              <li class="flex gap-4 border-l-2 border-primary-500 pl-4">
                <span class="text-sm text-gray-500 dark:text-gray-400">2026.09</span>
                <span>拟聚焦保研申请、导师匹配与方向收束</span>
              </li>
              <li class="flex gap-4 border-l-2 border-primary-500 pl-4">
                <span class="text-sm text-gray-500 dark:text-gray-400">2027.06</span>
                <span>拟完成本科阶段学习，希望在后续研究生阶段结合导师课题方向继续深入学习与科研训练</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { siteConfig } from '@/data/site'
</script>



