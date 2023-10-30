.section .bss
.lcomm num, 7

.section .text
.globl _start

_start:
    xorl %esi, %esi

loop:
    movl %esi, %eax
    leal num+6, %edi

conv:
    dec %edi
    xorl %edx, %edx
    movl $10, %ecx
    divl %ecx
    addb $'0', %dl
    movb %dl, (%edi)
    testl %eax, %eax
    jnz conv

    dec %edi
    movb $'\n', (%edi)

    movl $4, %eax
    movl $1, %ebx
    movl %edi, %ecx
    leal num+7, %edx
    subl %ecx, %edx
    int $0x80

    incl %esi
    cmp $10000, %esi
    jle loop

    movl $1, %eax
    xorl %ebx, %ebx
    int $0x80