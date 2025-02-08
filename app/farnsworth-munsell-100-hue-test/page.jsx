'use client';
import React, { useState, useEffect } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
    SortableContext,
    horizontalListSortingStrategy,
    arrayMove,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { matchColors } from "../action/result";
import RadarChart from '@/components/RadarChart';
import ButtonClick from '@/components/ButtonClick';

function SortableItem({ id, color }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        backgroundColor: color,
        width: '50px',
        height: '50px',
        display: 'inline-block',
        margin: '0 5px',
        borderRadius: '4px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    };

    return <div ref={setNodeRef} style={style} {...attributes} {...listeners} />;
}

export default function TestColorComponent() {
    const dataAnswer = [
        {
            order: "A",
            startColor: "#b2766f",
            endColor: "#9d8e48",
            testColor: [
                { order: 1, color: "#b17466" },
                { order: 2, color: "#ae725f" },
                { order: 3, color: "#a8745a" },
                { order: 4, color: "#a87452" },
                { order: 5, color: "#a8794e" },
                { order: 6, color: "#a97e4c" },
                { order: 7, color: "#a78244" },
                { order: 8, color: "#a28946" },
            ],
        },
        {
            order: "B",
            startColor: "#97914b",
            endColor: "#529687",
            testColor: [
                { order: 1, color: "#8d9352" },
                { order: 2, color: "#86955c" },
                { order: 3, color: "#7e9760" },
                { order: 4, color: "#7c9567" },
                { order: 5, color: "#699a71" },
                { order: 6, color: "#649a76" },
                { order: 7, color: "#5b947a" },
                { order: 8, color: "#589480" },
            ],
        },
        {
            order: "C",
            startColor: "#4e9689",
            endColor: "#7b84a3",
            testColor: [
                { order: 1, color: "#4c9691" },
                { order: 2, color: "#4a9696" },
                { order: 3, color: "#4a9698" },
                { order: 4, color: "#52949f" },
                { order: 5, color: "#6090a5" },
                { order: 6, color: "#688fa7" },
                { order: 7, color: "#6c8aa6" },
                { order: 8, color: "#7489a7" },
            ],
        },
        {
            order: "D",
            startColor: "#8484a3",
            endColor: "#b37673",
            testColor: [
                { order: 1, color: "#8d85a3" },
                { order: 2, color: "#9483a0" },
                { order: 3, color: "#99819d" },
                { order: 4, color: "#9f7f98" },
                { order: 5, color: "#a9798b" },
                { order: 6, color: "#ae7787" },
                { order: 7, color: "#b1757f" },
                { order: 8, color: "#b3757a" },
            ],
        },
    ];
    
    const [isClient, setIsClient] = useState(false);
    const [data, setData] = useState([
        {
            order: "A",
            startColor: "#b2766f",
            endColor: "#9d8e48",
            testColor: [
                { order: 1, color: "#b17466" },
                { order: 2, color: "#ae725f" },
                { order: 3, color: "#a8745a" },
                { order: 4, color: "#a87452" },
                { order: 5, color: "#a8794e" },
                { order: 6, color: "#a97e4c" },
                { order: 7, color: "#a78244" },
                { order: 8, color: "#a28946" },
            ],
        },
        {
            order: "B",
            startColor: "#97914b",
            endColor: "#529687",
            testColor: [
                { order: 1, color: "#8d9352" },
                { order: 2, color: "#86955c" },
                { order: 3, color: "#7e9760" },
                { order: 4, color: "#7c9567" },
                { order: 5, color: "#699a71" },
                { order: 6, color: "#649a76" },
                { order: 7, color: "#5b947a" },
                { order: 8, color: "#589480" },
            ],
        },
        {
            order: "C",
            startColor: "#4e9689",
            endColor: "#7b84a3",
            testColor: [
                { order: 1, color: "#4c9691" },
                { order: 2, color: "#4a9696" },
                { order: 3, color: "#4a9698" },
                { order: 4, color: "#52949f" },
                { order: 5, color: "#6090a5" },
                { order: 6, color: "#688fa7" },
                { order: 7, color: "#6c8aa6" },
                { order: 8, color: "#7489a7" },
            ],
        },
        {
            order: "D",
            startColor: "#8484a3",
            endColor: "#b37673",
            testColor: [
                { order: 1, color: "#8d85a3" },
                { order: 2, color: "#9483a0" },
                { order: 3, color: "#99819d" },
                { order: 4, color: "#9f7f98" },
                { order: 5, color: "#a9798b" },
                { order: 6, color: "#ae7787" },
                { order: 7, color: "#b1757f" },
                { order: 8, color: "#b3757a" },
            ],
        },
    ]);
    const [result, setResult] = useState({});
    const [isResult, setIsResult] = useState(false);

    const shuffleColors = (array) => {
        const colors = array.map(item => item.color);

        for (let i = colors.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [colors[i], colors[j]] = [colors[j], colors[i]];
        }
    
        return array.map((item, index) => ({
            ...item,
            color: colors[index],
        }));
    };

    useEffect(() => {
        const shuffledData = data.map((item) => ({
            ...item,
            testColor: shuffleColors([...item.testColor]),
        }));
        setData(shuffledData);
        setIsClient(true);
    }, [isResult]);

    const handleDragEnd = (groupIndex, event) => {
        const { active, over } = event;
    
        if (active.id !== over.id) {
            const currentGroup = data[groupIndex];
            const currentTestColor = [...currentGroup.testColor];
    
            const oldIndex = currentTestColor.findIndex((item) => item.order === active.id);
            const newIndex = currentTestColor.findIndex((item) => item.order === over.id);
    
            const newTestColor = arrayMove(currentTestColor, oldIndex, newIndex).map((item, index) => ({
                ...item,
                order: index + 1,
            }));
    
            const updatedData = [...data];
            updatedData[groupIndex] = {
                ...currentGroup,
                testColor: newTestColor,
            };
    
            setData(updatedData);
        }
    };

    const handleResult = async () => {
        try {
            const dataResult = await matchColors(data, dataAnswer);
            setIsResult(true);
            setResult(dataResult);
        } catch(error) {
            console.log(error);
        }
    }

    const resetResult = () => {
        setIsResult(false);
        setResult({});
    }

    if (!isClient) return null;

    return (
        <div>
            {isResult ? (
                <div className='max-w-md mx-auto my-5'>
                    <RadarChart data={result} />
                    <div className='bg-yellow-50 border border-yellow-500 p-5 rounded-md my-5'>
                        <p className='font-bold underline'>Keterangan:</p>
                        <p className='text-sm'><strong>Skor 0</strong>: Sempurna.</p>
                        <p className='text-sm'><strong>Skor kesalahan 1 hingga 4</strong>: Hasil hampir normal (dengan 1 atau 2 kesalahan kecil).</p>
                        <p className='text-sm'><strong>Skor kesalahan lebih dari 4</strong>: Indikasi gangguan penglihatan warna (buta warna)</p>
                    </div>
                    <p>Hasil: <span className='font-bold'>{result.totalIncorrect}</span></p>
                    <p><span className='underline'>
                        {resetResult.totalIncorrect === 0 ? "Hasil sempurna! Kamu memiliki kemampuan membedakan rona warna yang sangat baik. 👌" 
                            : (resetResult.totalIncorrect >= 1 && resetResult.totalIncorrect <= 2) ? "Hasil hampir sempurna! Kamu memiliki penglihatan warna yang normal dengan sedikit kesalahan kecil. ✅" 
                            : (resetResult.totalIncorrect >= 3 && resetResult.totalIncorrect <= 4) ? "Hasil normal, tetapi ada beberapa kesalahan. Perhatikan kembali kondisi penglihatanmu. ⚠️" 
                            : "Kamu mungkin memiliki gangguan penglihatan warna. Disarankan untuk berkonsultasi dengan ahli mata. 🚨"}
                    </span>
                    </p>
                    <div className='bg-yellow-50 border border-yellow-500 p-5 rounded-md my-5'>
                        <p className='text-sm'>
                            <span className='font-bold'>Interpretasi: </span>
                            {resetResult.totalIncorrect === 0 
                                ? "Tidak ada kesalahan dalam mengidentifikasi warna, menunjukkan penglihatan warna yang normal dan akurat." 
                                : (resetResult.totalIncorrect >= 1 && resetResult.totalIncorrect <= 2) 
                                ? "Kesalahan kecil mungkin disebabkan oleh faktor seperti pencahayaan, kelelahan mata, atau variasi alami dalam persepsi warna." 
                                : (resetResult.totalIncorrect >= 3 && resetResult.totalIncorrect <= 4) 
                                ? "Meskipun masih dalam rentang normal, kesalahan yang lebih banyak bisa menjadi tanda awal kelelahan mata atau sedikit penurunan sensitivitas warna." 
                                : "Skor ini menunjukkan kemungkinan adanya color vision deficiency (buta warna parsial atau total), seperti kesulitan membedakan warna merah-hijau atau biru-kuning."
                            }
                        </p>
                    </div>
                    <div>
                        <ButtonClick onClick={resetResult} label={"Test Buta Warna Ulang"} />
                    </div>
                </div>
            ) : (
                <div className='my-5'>
                    <div className='mb-9 max-w-xl mx-auto'>
                        <p className='text-center font-bold'>Susun warna berdasarkan rona (hue) di setiap baris dengan cara menyeret dan meletakkan kotak, lalu klik 'CEK' untuk melihat hasil Anda. Warna pertama dan terakhir di setiap baris sudah tetap. Gunakan PC atau tablet! Tes ini lebih sulit dilakukan di ponsel.</p>
                    </div>
                    {data.map((group, groupIndex) => (
                        <div key={group.order} className='mb-4'>
                        <div className='flex flex-row justify-center items-center'>
                            <div style={{ 
                                backgroundColor: group.startColor, 
                                width: '50px',
                                height: '50px',
                                display: 'inline-block',
                                margin: '0 5px',
                                borderRadius: '4px',
                                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', 
                                border: '3px solid black',
                                cursor: 'not-allowed',
                            }}>
                            </div>
                            <DndContext
                                collisionDetection={closestCenter}
                                onDragEnd={(event) => handleDragEnd(groupIndex, event)}
                            >
                                <SortableContext
                                    items={group.testColor.map((item) => item.order)}
                                    strategy={horizontalListSortingStrategy}
                                >
                                    <div className="flex flex-wrap md:flex-row overflow-hidden">
                                        {group.testColor.map((item) => (
                                            <SortableItem
                                                key={item.order}
                                                id={item.order}
                                                color={item.color}
                                            />
                                        ))}
                                    </div>
                                </SortableContext>
                            </DndContext>
                            <div style={{ 
                                backgroundColor: group.endColor, 
                                width: '50px',
                                height: '50px',
                                display: 'inline-block',
                                margin: '0 5px',
                                borderRadius: '4px',
                                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', 
                                border: '3px solid black',
                                cursor: 'not-allowed',
                            }}>
                            </div>
                        </div>
                        </div>
                    ))}
                    <ButtonClick onClick={handleResult} label={"Cek Data"} />
                </div>
            )}
        </div>
    );
}